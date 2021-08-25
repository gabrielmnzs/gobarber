import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderDayAvailabilityService from './ListProviderDayAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderDayAvailabilityService: ListProviderDayAvailabilityService;

describe('ListProviderDayAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    listProviderDayAvailabilityService = new ListProviderDayAvailabilityService(
      fakeAppointmentsRepository,
    );

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2021, 8, 24, 11).getTime();
    });
  });

  it('should be able to list the day availability from provider', async () => {
    const iterable = Array.from(
      { length: 2 },
      (_, index) => index + 14,
    );

    await Promise.all(
      iterable.map(async hour =>
        fakeAppointmentsRepository.create({
          provider_id: 'user',
          user_id: 'user',
          date: new Date(2021, 8, 24, hour, 0, 0),
        }),
      ),
    );

    const availability = await listProviderDayAvailabilityService.execute({
      provider_id: 'user',
      day: 24,
      month: 9,
      year: 2021,
    });

    expect(availability).toEqual(expect.arrayContaining([
      { hour: 8, available: false },
      { hour: 9, available: false },
      { hour: 10, available: false },
      { hour: 11, available: false },
      { hour: 12, available: true },
      { hour: 13, available: true },
      { hour: 14, available: false },
      { hour: 15, available: false },
      { hour: 16, available: true },
      { hour: 17, available: true },
    ]))
  });
});
