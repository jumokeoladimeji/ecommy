import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Carts, {
        foreignKey: 'cart',
        as: 'cart'
      });
      this.hasMany(models.orders, {
        foreignKey: 'user_id',
        as: 'orders'
      });
      this.hasMany(models.Addresses, {
        foreignKey: 'user_id',
        as: 'addresses'
      });
      this.hasMany(models.BillingInfo, {
        foreignKey: 'user_id',
        as: 'billing_infos'
      });
    }
  };
  Users.init({
    name: { type: DataTypes.TEXT, allowNull: true },
    username: { type: DataTypes.TEXT, allowNull: true },
    role: { type: DataTypes.TEXT, default: 'user' },
    email: { type: DataTypes.TEXT, allowNull: false },
    phone_number: { type: DataTypes.TEXT, allowNull: false },
    image_url: { type: DataTypes.TEXT, allowNull: true },
    password: { type: DataTypes.TEXT, allowNull: false },
    isVerified: { type: DataTypes.BOOLEAN, default: false },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};