const { Model, DataTypes } = require('sequelize');

class ServiceProvider extends Model {
  static init(sequelize) {
    super.init({
      photo: DataTypes.STRING

    }, {
      sequelize,
      tableName: 'service-providers',
    })
  }

  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
  }
}

module.exports = ServiceProvider;
