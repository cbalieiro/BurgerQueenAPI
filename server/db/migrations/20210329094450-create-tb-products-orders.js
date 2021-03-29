'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TBProductsOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      productsID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model:'TBProducts' ,
          key:'id'
        }
      },
      ordersID: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model:'TBOrders' ,
          key:'id'
        }
      },
      qtd: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TBProductsOrders');
  }
};