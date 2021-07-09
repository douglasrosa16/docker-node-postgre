const bcrypt = require("bcryptjs");

const User = require('../../src/models/User');
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("deveria criar uma senha criptografada", async () => {
    const user = await User.create({
      name: "Douglas",
      email: "douglas@rocketseat.com.br",
      password: "123456"
    });

    const compareHash = await bcrypt.compare("123456", user.password);

    expect(compareHash).toBe(true);
  });
});
