<div align="center"><h1 style="font-weight: 900">( EXPRESS API STARTER)();</h1></div>
<div align="center">
<a href="https://expressjs.com/"><img src="https://img.shields.io/badge/framework-express-green" height="20"></a>
<a href="https://sequelize.org/"><img src="https://img.shields.io/badge/ORM-sequelize-red" height="20"></a>
<a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/backend-nodejs-blue" height="20"></a>
</div>

express api starter is a starter project for initial project api with express an sequelize ORM. this starter to faster development with nodejs project

## Installation

Clone project in local

```
$ git clone git@github.com:hwisnu222/express-api-starter.git
```

Install all dependencies

```
$ yarn install
```

Start server

```
$ yarn start
```

Open browser and access on url [http://localhost:5000](http://localhost:5000)

## Running Docker

for running docker use this command bellow

for production

```
$ docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

for development

```
$ docker-compose up -d
```

Database

if you see database you can use a mysql client like:

- HeidiSQL
- Navicat
- and anything
