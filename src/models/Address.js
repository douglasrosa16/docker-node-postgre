const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(connection){
        super.init({
            cep: DataTypes.STRING,
            rua: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING
        },
        {
            sequelize: connection
        })
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

module.exports = Address;