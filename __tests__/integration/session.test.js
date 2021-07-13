const bcrypt = require("bcryptjs");
const { hash } = require("bcryptjs");
const Sequelize = require('sequelize');
const dbConfig = require('../../src/config/database');
const factory = require('../factories');
const faker = require("faker");
const User= require('../../src/models/User');
const connection = new Sequelize(dbConfig);
const app = require("../../src/app");
const request = require("supertest");

User.init(connection);

describe("Autenticacao", () => {
  beforeEach(async () => {
    User.destroy;
  });

  it("deveria se autenticar com credenciais validas", async () => {
    const password = faker.internet.password();
    const passwordHash = await hash(password, 8);
    const user = await factory.create("User", {
      password: passwordHash
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: password
      });

    expect(response.status).toBe(200);
  });
});

