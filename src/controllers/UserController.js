const { hash } = require('bcryptjs');
const { destroy } = require('../models/User');
const User = require('../models/User');


module.exports = {
    async index(req, res){
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res){
        const { name, email, lastname, about, password, permission } = req.body;

        const passwordHash = await hash(password, 8);

        const user = await User.create({name, email, lastname, about, password: passwordHash, permission});

        return res.json(user);
    },

    async show(req, res){
      const { user_id } = req.params;

      const user = await User.findOne({ where: { id: user_id } });

      if(!user){
        throw new Error('Usuário não encontrado');
      }

      delete user.dataValues.password;

      return res.json(user);
    },

    async destroy(req, res){
      const users = await User.destroy({
        where: {},
      });
      return res.json(users)
    }
}
