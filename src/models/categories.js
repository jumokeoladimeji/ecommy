import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Cards, {
        foreignKey: 'category_id',
        as: 'cards'
      });
      this.hasMany(models.CardOrderDetails, {
        foreignKey: 'category_id',
        as: 'category_order_details'
      });
    }
  };
  Categories.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};