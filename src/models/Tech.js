const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(connection){
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize: connection,
            tableName: 'techs'
        })
    }

    static associate(models){
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' });
    }

}

module.exports = Address;