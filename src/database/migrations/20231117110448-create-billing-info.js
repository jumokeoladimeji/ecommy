const { v4: uuidv4 } = require('uuid');

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BillingInfos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuidv4(),
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'Users', key: 'id', as: 'user_id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      card_type: {
        type: Sequelize.STRING
      },
      provider: {
        type: Sequelize.STRING
      },
      card_no: {
        type: Sequelize.INTEGER
      },
      cvv: {
        type: Sequelize.INTEGER
      },
      exp_month: {
        type: Sequelize.STRING
      },
      exp_year: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BillingInfos');
  }
};