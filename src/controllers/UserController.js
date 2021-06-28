const User = require('../models/User');

module.exports = {
    async index(req, res){
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res){
        const { name, email, lastname, about, password } = req.body;

        const user = await User.create({name, email, lastname, about, password});

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
    }
}
