'use strict';

const fs = require('fs'); //fs helps react to read and write files.
const path = require('path');//a core built-in module that provides users a way of working with file paths and directories.
//ex. path.dirname('/random/something') returns: /random
const Sequelize = require('sequelize'); //ORM maps an object syntax onto our database schemas.
////path.basename get you the portio of the path of the file. __filename give you the absolute
//__filename get the absolute path of the currently excuting file/code. ex. console.log(__filename) give you /Users/neilgardner/Milestone_Project_3/backend/models/index.js
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; //process.env read the NODE_ENV in the .env file. NODE_ENV=development
const config = require(__dirname + '/../config/config.js')[env];//__dirname return what directories your files live. config use the development env varibles in the config file.
const db = {}; // empty object db

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;