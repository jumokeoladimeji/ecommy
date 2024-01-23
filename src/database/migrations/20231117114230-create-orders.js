const { v4: uuidv4 } = require('uuid');

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
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
      expected_time_of_delivery: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      confirm_delivery: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      paid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      address_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Addresses', 
          key: 'id', 
          as: 'address_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      bill: {
        type: Sequelize.STRING
      },
      customized_message: {
        type: Sequelize.STRING
      },
      shipping_phone_number: {
        type: Sequelize.STRING
      },
      payment_id: {
        type: Sequelize.INTEGER
      },
      stripe_charge_id: {
        type: Sequelize.INTEGER
      },
      extra_notes: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Orders');
  }
};