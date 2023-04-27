'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog_treats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dog_treats.init({
    barcode: DataTypes.INTEGER,
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dog_treats',
  });
  return Dog_treats;
};