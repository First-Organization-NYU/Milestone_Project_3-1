'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsToMany(Dog_toys, {foreignKey: 'barcode'});
      Cart.belongsToMany(Dog_treats, {foreignKey: 'barcode'});
      Cart.belongsTo(User, {foreignKey: 'email'})
    }
  }
  Cart.init({
    cartItem_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    barcode:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, 
  {
    sequelize,
    modelName: 'Cart',
    tableName: "cart",
    timestamps: false
  });
  return Cart;
};