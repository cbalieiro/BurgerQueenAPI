'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TBProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TBProducts.init({
    name: DataTypes.STRING,
    typeProducts: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    typeMenu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TBProducts',
  });
  return TBProducts;
};