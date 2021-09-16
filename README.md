<div  align="center"  style="margin-bottom: 20px;">
  <img  alt="gobarber"  src=".github/logo.svg"  width="auto"  heigth="auto"/>
</div>

<br />

<p  align="center">
  <a  href="#-preview">Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a  href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a  href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a  href="#-license">License</a>
</p>  

<br />

<div  align="center"  style="margin: 20px;">
  <img  src="https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square"  alt="License">
  <img  src="https://img.shields.io/github/last-commit/gabrielmnzs/gobarber?color=orange&style=flat-square"  alt="Last commit">
  <img  src="https://img.shields.io/badge/made%20by-Gabriel%20Menezes-%23FF9000?color=orange&style=flat-square"  alt="License">
  <img  src="https://img.shields.io/github/languages/top/gabrielmnzs/gobarber?color=orange&style=flat-square"  alt="License">
  <img  src="https://img.shields.io/github/stars/gabrielmnzs/gobarber?color=orange&style=flat-square"  alt="Stars">
</div>

<br />

<p align="center"  style="margin: 20px;">
GoBarber is a barber shop/beauty salon service scheduling platform. With this application, service providers can register and users can make appointments with these providers.
</p>

<br />

## 🔥 Preview

<div  align="center">
  <img  src=".github/preview-web.png"  style="height:300px;"  alt="preview"/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img  src=".github/preview-app.png"  style="height:300px;"  alt="preview"/>
</div>

## 🧪 Technologies

This project was developed using the following technologies:

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [JWT](https://jwt.io/)
- [Yup](https://github.com/jquense/yup)
- [UnForm](https://unform.dev/)
- [Styled-Components](https://styled-components.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 🚀 Getting started

Clone the project

```bash
$ git clone https://github.com/gabrielmnzs/gobarber.git
```

### **Backend** ⚙️

Import the `Insomnia.json` on Insomnia App or click on  button bellow

<a href="https://insomnia.rest/run/?label=gobarber-gabrielmnzs&uri=https%3A%2F%2Fgithub.com%2Fgabrielmnzs%2Fgobarber%2Fblob%2Fmaster%2Fbackend%2FInsominia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

**Requirements**

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Access the folder**

```bash
$ cd backend
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber_postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name redis -p 6379:6379 -d -t redis:alpine

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

### **Frontend** 💻

**Requirements**

- Make sure the API is running

**Access the folder**

```bash
$ cd frontend
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```

### **App** 📱

**Requirements**

- Make sure the API is running

**Access the folder**

```bash
$ cd app
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# If you are going to emulate with android, run this command
# Be sure to have the emulator open
$ yarn android

# If you are going to emulate with ios, run this command
$ yarn ios
```

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

---

<p  align="center"  style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
  Made with :purple_heart: by <strong>Gabriel Menezes</strong>
</p>
