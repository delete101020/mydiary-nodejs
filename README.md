## Table of Contents

* [Installation](#installation)
* [Usage](#usage)

#### Prerequisites
Before you begin, make sure your development environment includes `Node.js` and an `npm` package manager.

###### Node.js
Requires `Node.js` version 8.x or 10.x.

- To check your version, run `node -v` in a terminal/console window.
- To get `Node.js`, go to [nodejs.org](https://nodejs.org/).

###### WampServer

- To get `WampServer`, go to [wampserver.com](http://www.wampserver.com/en/).

## Installation

### Clone repo

``` bash
# clone the repo
$ git clone https://github.com/delete101020/mydiary-nodejs.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install

```

## Usage

``` bash
# change database config
$ cd config/config.db.json

# migrate models and seeders to database
$ sequelize db:migrate
$ sequelize db:seed:all

# serve with load at localhost:3000.
$ npm start

