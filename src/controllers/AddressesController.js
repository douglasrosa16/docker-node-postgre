const Address = require("../models/Address");
const User = require("../models/User");

module.exports = {
    async index(req, res){
        const { user_id } = req.params;
        console.log(req.user.id);
        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        });

        return res.json(user.addresses);
    },

    async store(req, res){
        const { user_id } = req.params;

        const { cep, numero, rua, cidade, pais, estado } = req.body;


        const user = await User.findByPk(user_id);


        if (!user) {
            return res.status(400).json({error: 'Usuário não encontrado'});
        }

        const address = await Address.create({
            cep,
            rua,
            numero,
            cidade,
            pais,
            estado,
            user_id,
        });

        return res.json(address);

    }
}
