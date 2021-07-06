const { Model, DataTypes } = require('sequelize');

class Service extends Model {
  static init(sequelize) {
    super.init({
      photo: DataTypes.STRING,
      title: DataTypes.STRING,
      about: DataTypes.STRING,
      value: DataTypes.INTEGER

    }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.ServiceProvider, { foreignKey: 'service_providers_id', as: 'service_providers' });
  }
}

module.exports = Service;
