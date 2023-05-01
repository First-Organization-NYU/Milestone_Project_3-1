'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog_toys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Dog_toys.belongsToMany(models.Cart, {foreignKey: 'barcode'})
    }
  }
  Dog_toys.init(
    {
      barcode:{
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNullL: false
      }
  }, {
    sequelize,
    modelName: "Dog_toys",
    tableName: "dog_toys",
    timestamps: false
  });
  return Dog_toys;
};