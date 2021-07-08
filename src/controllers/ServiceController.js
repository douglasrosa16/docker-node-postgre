const Service = require('../models/Service');
const ServiceProvider = require('../models/ServiceProvider');

module.exports = {
  async index(req, res){
    const { service_provider_id } = req.params;

    const services = await Service.findAll({include: [{model: ServiceProvider, as: "service_providers"}], where: { id: service_provider_id }});

    return res.json(services);
},

  async store(req, res){
    const { service_provider_id } = req.params;
    const { photo, title, about, value } = req.body;

    const serv_provider = await ServiceProvider.findByPk(service_provider_id);

    if (!serv_provider) {
        return res.status(400).json({error: 'Prestador de Serviço não encontrado'});
    }

    const service = await Service.create({
      service_providers_id: service_provider_id,
      photo: photo,
      title: title,
      about: about,
      value: value
    });

    return res.json(service);
  },

  async show(req, res){
    //Trazer o serviço em específico
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
