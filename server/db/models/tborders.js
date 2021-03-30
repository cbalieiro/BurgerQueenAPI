const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TBOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TBOrders.belongsToMany(models.TBProducts, {
        through: "TBProductsOrders",
        as: "TBProducts",
        foreignKey: "ordersID",
        onDelete: "CASCADE",
        otherKey: "productsID",
      });
    }
  }
  TBOrders.init(
    {
      userID: DataTypes.INTEGER,
      clientName: DataTypes.STRING,
      table: DataTypes.INTEGER,
      status: DataTypes.STRING,
      comments: DataTypes.STRING,
      processedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "TBOrders",
    },
  );
  return TBOrders;
};
