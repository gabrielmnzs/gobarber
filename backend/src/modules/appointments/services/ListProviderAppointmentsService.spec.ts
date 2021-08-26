import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderAppointmentsService: ListProviderAppointmentsService;

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderAppointmentsService = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
    );

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2021, 9, 20, 11).getTime();
    });
  });

  it('should be able to list the appointments on a specific day', async () => {
    const iterable = Array.from(
      { length: 2 },
      (_, index) => index + 14,
    );

    var appointmentsArray = await Promise.all(
      iterable.map(async hour =>
        fakeAppointmentsRepository.create({
          provider_id: 'provider',
          user_id: 'user',
          date: new Date(2021, 9, 20, hour, 0, 0),
        }),
      ),
    );

    const appointments = await listProviderAppointmentsService.execute({
      provider_id: 'provider',
      day: 20,
      month: 10,
      year: 2021,
    });

    expect(appointments).toEqual(appointmentsArray);
  });
});
