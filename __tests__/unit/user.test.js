const bcrypt = require("bcryptjs");
const { hash } = require("bcryptjs");
const Sequelize = require('sequelize');
const dbConfig = require('../../src/config/database');
const factory = require('../factories');
const faker = require("faker");
const User= require('../../src/models/User');
const connection = new Sequelize(dbConfig);

User.init(connection);

describe("User", () => {
  beforeEach(() => {
    User.destroy;
  });
  it("deveria criar uma senha criptografada", async () => {
    const password = faker.internet.password();
    const passwordHash = await hash(password, 8);
    const user = await factory.create("User", {
      password: passwordHash
    });
    const compareHash = await bcrypt.compare(password, user.password);

    expect(compareHash).toBe(true);
  });
});
