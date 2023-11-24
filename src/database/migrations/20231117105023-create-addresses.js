export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Addresses', {
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
      address1: {
        type: Sequelize.TEXT
      },
      address2: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.TEXT
      },
      state: {
        type: Sequelize.TEXT
      },
      zip: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.TEXT
      },
      first_name: {
        type: Sequelize.TEXT
      },
      last_name: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Addresses');
  }
};