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
      productsID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:'TBProducts',
          key:'id'
        }
      },
      ordersID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:'TBOrders' ,
          key:'id'
        },
        onDelete:'CASCADE',
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