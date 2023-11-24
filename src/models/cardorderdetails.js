import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class CardOrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cards, {
        foreignKey: 'card_id',
        as: 'card'
      });
      this.belongsTo(models.orders, {
        foreignKey: 'order_id',
        as: 'order'
      });
    }
  };
  CardOrderDetails.init({
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CardOrderDetails',
  });
  return CardOrderDetails;
};