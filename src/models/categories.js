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
    }
  };
  Categories.init({
    name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};