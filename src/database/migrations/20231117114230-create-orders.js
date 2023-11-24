export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
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
      expected_time_of_delivery: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.TEXT
      },
      confirm_delivery: {
        type: Sequelize.TEXT
      },
      shipping_address_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Addresses', 
          key: 'id', 
          as: 'shipping_address_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      bill: {
        type: Sequelize.TEXT
      },
      customized_message: {
        type: Sequelize.TEXT
      },
      shipping_numbers: {
        type: Sequelize.INTEGER
      },
      payment_id: {
        type: Sequelize.INTEGER
      },
      stripe_charge_id: {
        type: Sequelize.INTEGER
      },
      extra_notes: {
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
    await queryInterface.dropTable('orders');
  }
};