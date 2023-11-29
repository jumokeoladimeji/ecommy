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
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img_url: DataTypes.STRING,
    front_img_url: DataTypes.STRING,
    side_img_url: DataTypes.STRING,
    back_img_url: DataTypes.STRING,
    description: DataTypes.STRING,
    available_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cards',
  });
  return Cards;
};