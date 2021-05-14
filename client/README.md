# client

## Description

Nuxt.js client for NASA app. Live version here: https://nasa-app-client.netlify.app/

In development mode axios base url is localhost:3000. Go to nuxt.config.js file if you wish to change it.
If you want to run only client app locally without Nest.js server and use heroku hosted API create .env file in project's root directory and paste this:

```
BASE_URL=https://nest-nasa-api.herokuapp.com
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
