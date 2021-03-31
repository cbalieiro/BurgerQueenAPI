module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TBOrders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
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
        defaultValue: "pending",
        type: Sequelize.STRING,
      },
      comments: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      processedAt: {
        allowNull: false,
        defaultValue: Date.now(),
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
  down: async (queryInterface) => {
    await queryInterface.dropTable("TBOrders");
  },
};
