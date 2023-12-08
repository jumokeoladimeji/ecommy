import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config()

const basename = path.basename(__filename);
const env = process.env.NODE_ENV.trim() || 'development';
const MYSQL_URL = process.env.MYSQL_URL.trim()

const config = require('../config/database.js')[env];

const db = {};

// const sequelize = new Sequelize(config.database, config.username, config.password, config);
const sequelize = new Sequelize(MYSQL_URL);

// sequelize.authenticate().then(() => {
//   console.log('Connection has been established successfully.');
// }).catch((error) => {
//   console.error('Unable to connect to the database: ', error);
// });

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
