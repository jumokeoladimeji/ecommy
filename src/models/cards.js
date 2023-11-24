import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Categories, {
        foreignKey: 'category_id',
        as: 'category'
      });
      this.hasMany(models.CardOrderDetails, {
        foreignKey: 'card_id',
        as: 'card_order_details'
      });
    }
  };
  Cards.init({
    title: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    img_url: DataTypes.TEXT,
    description: DataTypes.TEXT,
    available_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cards',
  });
  return Cards;
};