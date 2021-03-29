'use strict';
const {
  Model
} = require('sequelize');
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
  };
  TBProductsOrders.init({
    id: DataTypes.UUID,
    productsID: DataTypes.UUID,
    ordersID: DataTypes.UUID,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TBProductsOrders',
  });
  return TBProductsOrders;
};