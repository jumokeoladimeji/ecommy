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
      this.hasMany(models.Orders, {
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
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, default: 'user' },
    email: { type: DataTypes.STRING, allowNull: false },
    phone_number: { type: DataTypes.STRING, allowNull: false },
    image_url: { type: DataTypes.STRING, allowNull: true },
    password: { type: DataTypes.STRING, allowNull: false },
    isVerified: { type: DataTypes.BOOLEAN, default: true },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};