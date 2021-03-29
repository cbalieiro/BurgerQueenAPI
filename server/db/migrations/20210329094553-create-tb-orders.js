"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TBOrders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id: {
        type: Sequelize.UUID,
      },
      userID: {
        type: Sequelize.UUID,
        reference: {
          model: "TBUsers",
          key: "id",
        },
      },
      clientName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      table: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      status: { 
        allowNull: false,
        type: Sequelize.STRING,
      },
      comments: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      processedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TBOrders");
  },
};
