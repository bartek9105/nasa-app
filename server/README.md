## Description

Nest.js API for Nasa App project.
Live version here: https://nest-nasa-api.herokuapp.com/

## Env variables

Before you run this app create .env file in project's root folder and provide your variables. This app uses MongoDB cloud service.

```
DB_CONNECTION=mongodb+srv://<dbUser>:<password>@cluster0.8asui.mongodb.net/<dbName>?retryWrites=true&w=majority
NASA_API_KEY=your_api_key
```

Get NASA API key here: https://api.nasa.gov/

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
