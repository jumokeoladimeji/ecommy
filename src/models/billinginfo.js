import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class BillingInfo extends Model {
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
    }
  };
  BillingInfo.init({
    card_type: DataTypes.TEXT,
    provider: DataTypes.TEXT,
    card_no: DataTypes.INTEGER,
    cvv: DataTypes.INTEGER,
    exp_month: DataTypes.TEXT,
    exp_year: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'BillingInfo',
  });
  return BillingInfo;
};