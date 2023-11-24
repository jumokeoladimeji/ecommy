export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BillingInfos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'Users', key: 'id', as: 'user_id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      card_type: {
        type: Sequelize.TEXT
      },
      provider: {
        type: Sequelize.TEXT
      },
      card_no: {
        type: Sequelize.INTEGER
      },
      cvv: {
        type: Sequelize.INTEGER
      },
      exp_month: {
        type: Sequelize.TEXT
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