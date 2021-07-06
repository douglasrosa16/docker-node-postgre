const User = require('../models/User');
const ServiceProvider = require('../models/ServiceProvider');
const { show } = require('./ConsumerController');

module.exports = {
  async index(req, res){

    const user = await User.findAll({
        include: { association: 'service-providers' }
    });

    return res.json(user);
  },

  async store(req, res){
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
        return res.status(400).json({error: 'Prestador de Serviço não encontrado'});
    }

    const service_provider = await ServiceProvider.create({
        user_id,
    });

    return res.json(service_provider);
  },

  async show (req, res){
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
        include: { association: 'service-providers' }
    });
    return res.json(user.service-providers);
  }
}
