const { v4: uuidv4 } = require('uuid');

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuidv4(),
      },
      category_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'Categories', key: 'id', as: 'category_id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      img_url: {
        type: Sequelize.STRING
      },
      front_img_url: {
        type: Sequelize.STRING
      },
      side_img_url: {
        type: Sequelize.STRING
      },
      back_img_url: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      available_quantity: {
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
    await queryInterface.dropTable('Cards');
  }
};