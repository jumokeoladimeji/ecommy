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
      this.hasMany(models.Orders, {
        foreignKey: 'address_id',
        as: 'orders'
    });
    }
  };
  Addresses.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    full_address:  {
      type: DataTypes.JSON,
      get() {
        return JSON.parse(this.getDataValue("full_address"));
      },
      set(value) {
        return this.setDataValue("full_address", JSON.stringify(value));
      }
    }, 
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.NUMBER,
    country: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Addresses',
  });
  return Addresses;
};