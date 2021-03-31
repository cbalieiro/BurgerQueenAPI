/* eslint-disable no-unused-vars */
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TBProductsOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TBProductsOrders.init(
    {
      productsID: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: "The Product ID field must not be empty",
          },
        },
      },
      ordersID: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: "The Order ID field must not be empty",
          },
        },
      },
      qtd: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "The quantity must not be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "TBProductsOrders",
    },
  );
  return TBProductsOrders;
};
