const Service = require('../models/Service');
const ServiceProvider = require('../models/ServiceProvider');

module.exports = {
  async index(req, res){
    const { serv_prov_id } = req.params;

    const service_provider = await ServiceProvider.findByPk(serv_prov_id, {
        include: { association: 'services' }
    });
    return res.json(service_provider.services);
  },

  async store(req, res){
    const { serv_prov_id } = req.params;

    const serv_provider = await ServiceProvider.findByPk(serv_prov_id);

    if (!serv_provider) {
        return res.status(400).json({error: 'Prestador de Serviço não encontrado'});
    }

    const service = await Service.create({
      serv_prov_id,
    });

    return res.json(service);
  }
}
