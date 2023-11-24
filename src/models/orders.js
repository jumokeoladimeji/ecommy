import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class orders extends Model {
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
      this.hasMany(models.Cards, {
        foreignKey: 'order_id',
        as: 'cards'
      });
      this.belongsTo(models.Addresses, {
        foreignKey: 'address_id',
        as: 'shipping_address_id'
      });
      this.hasMany(models.CardOrderDetails, {
        foreignKey: 'order_id',
        as: 'card_order_details'
      });
    }
  };
  orders.init({
    expected_time_of_delivery: DataTypes.DATE,
    status: DataTypes.TEXT,
    confirm_delivery: DataTypes.BOOLEAN,
    bill: DataTypes.TEXT,
    customized_message: DataTypes.TEXT,
    shipping_phone_number: DataTypes.TEXT,
    payment_id: DataTypes.INTEGER,
    stripe_charge_id: DataTypes.INTEGER,
    extra_notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};