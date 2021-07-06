const User = require('../models/User');
const Consumer = require('../models/Consumer');

module.exports = {
  async index(req, res){

    const user = await Consumer.findAll({include: [{model: User, as: "users"}]});

    return res.json(user);
  },

  async store(req, res){
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
        return res.status(400).json({error: 'Usuário não encontrado'});
    }

    const consumers = await Consumer.create({
        user_id,
    });

    return res.json(consumers);
  },

  async show(req, res){
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
        include: { association: 'consumers' }
    });
    return res.json(user.consumers);
  }
}
