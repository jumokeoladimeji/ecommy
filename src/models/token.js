import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Token.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: DataTypes.STRING,
    token: DataTypes.STRING,
    expiresAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};