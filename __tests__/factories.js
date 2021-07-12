const faker = require("faker");
const { factory } = require("factory-girl");
const User= require('../src/models/User');
const dbConfig = require('../src/config/database');
const Sequelize = require('sequelize');
const connection = new Sequelize(dbConfig);

User.init(connection);


factory.define("User", User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
});

module.exports = factory;
