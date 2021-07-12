const bcrypt = require("bcryptjs");
const { hash } = require("bcryptjs");
const Sequelize = require('sequelize');
const dbConfig = require('../../src/config/database');

const User = require('../../src/models/User');
const Address = require('../../src/models/Address');
const Tech = require('../../src/models/Tech');
const ServiceProvider = require('../../src/models/ServiceProvider');
const Consumer = require('../../src/models/Consumer');
const Service = require('../../src/models/Service');
const truncate = require("../utils/truncate");

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);
ServiceProvider.init(connection);
Consumer.init(connection);
Service.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);
ServiceProvider.associate(connection.models);
Consumer.associate(connection.models);
Service.associate(connection.models);

describe("User", () => {

  it("deveria criar uma senha criptografada", async () => {
    const password = "123456";
    const passwordHash = await hash(password, 8);
    const user = await User.create({
     name: "Douglas",
     email: "dougdlas@rocketseat.com.br",
     password: passwordHash,
    });

    const compareHash = await bcrypt.compare("123456", user.password);

    expect(compareHash).toBe(true);
  });
});
