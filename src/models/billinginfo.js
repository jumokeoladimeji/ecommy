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
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    card_type: DataTypes.STRING,
    provider: DataTypes.STRING,
    card_no: DataTypes.INTEGER,
    cvv: DataTypes.INTEGER,
    exp_month: DataTypes.STRING,
    exp_year: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'BillingInfo',
  });
  return BillingInfo;
};