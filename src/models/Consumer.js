const { Model, DataTypes } = require('sequelize');

class Consumer extends Model {
  static init(sequelize) {
    super.init({
      photo: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'consumers'
    })
  }

  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
  }
}

module.exports = Consumer;
