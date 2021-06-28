const { Model, DataTypes } = require('sequelize');

class ServiceProvider extends Model {
  static init(sequelize) {
    super.init({
      photo: DataTypes.STRING

    }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = ServiceProvider;
