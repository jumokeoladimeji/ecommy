import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Orders extends Model {
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
      // this.hasMany(models.Cards, {
      //   foreignKey: 'order_id',
      //   as: 'cards'
      // });
      this.belongsTo(models.Addresses, {
        foreignKey: 'address_id',
        as: 'shipping_addresses'
      });
      this.hasMany(models.CardOrderDetails, {
        foreignKey: 'order_id',
        as: 'card_order_details'
      });
    }
  };
  Orders.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    expected_time_of_delivery: DataTypes.DATE,
    status: DataTypes.STRING,
    confirm_delivery: DataTypes.BOOLEAN,
    bill: DataTypes.STRING,
    customized_message: DataTypes.STRING,
    shipping_phone_number: DataTypes.STRING,
    payment_id: DataTypes.INTEGER,
    stripe_charge_id: DataTypes.INTEGER,
    extra_notes: DataTypes.STRING,
    paid: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};