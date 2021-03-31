const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TBOrders extends Model {
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
      userID: {
        allowNull: false,
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: "The UserID field must not be empty",
          },
        },
      },
      clientName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The  ClientName field must not be empty",
          },
        },
      },
      table: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "The  Table field must not be empty",
          },
        },
      },
      status: DataTypes.STRING, /** Status atualizado automaticamente na criação */
      comments: DataTypes.STRING, /** Comments podem ou não serem adicionados */
      processedAt: DataTypes.DATE, /** ProcessedAt serão atualizados durante o update */
    },
    {
      sequelize,
      modelName: "TBOrders",
    },
  );
  return TBOrders;
};
