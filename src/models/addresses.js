import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user'
      });
      this.hasMany(models.orders, {
        foreignKey: 'address_id',
        as: 'orders'
    });
    }
  };
  Addresses.init({
    address1: DataTypes.TEXT,
    address2: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    zip: DataTypes.NUMBER,
    country: DataTypes.TEXT,
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Addresses',
  });
  return Addresses;
};