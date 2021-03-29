"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TBProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TBProducts.belongsToMany(models.TBOrders,{
        through: 'TBProductsOrders',
        as: 'TBOrders',
        foreignKey: 'productsID',
        otherKey:'ordersID'
      })
    }
  }
  TBProducts.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The Name field must not be empty",
          },
        },
      },
      typeProducts: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      category: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The Category field must not be empty",
          },
        },
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The Image field must not be empty",
          },
        },
      },
      price: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The Price field must not be empty",
          },
        },
      },
      typeMenu: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The TypeMenu field must not be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "TBProducts",
    }
  );
  return TBProducts;
};
