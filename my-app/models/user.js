'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Cart}) {
      // define association here
      // User.hasMany(Cart, {foreignKey: 'barcode'})
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // role: {
      //   type: DataTypes.ENUM
      // }
  }, {
    sequelize,
    modelName: "User",
    tableName: "users_table",
    timestamps: false
  });
  return User;
};