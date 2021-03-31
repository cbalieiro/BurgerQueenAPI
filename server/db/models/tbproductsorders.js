/* eslint-disable no-unused-vars */
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TBProductsOrders extends Model {
    static associate(models) {
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
