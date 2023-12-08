import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class CardOrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.Cards, {
      //   foreignKey: 'card_id',
      //   as: 'card'
      // });
      // this.belongsTo(models.Orders, {
      //   foreignKey: 'order_id',
      //   as: 'order'
      // });
    }
  };
  CardOrderDetails.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CardOrderDetails',
  });
  return CardOrderDetails;
};