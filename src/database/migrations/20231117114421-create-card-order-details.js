export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cardOrderDetails', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      card_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Cards', 
          key: 'id', 
          as: 'card_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      order_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'orders', 
          key: 'id', 
          as: 'order_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('cardOrderDetails');
  }
};