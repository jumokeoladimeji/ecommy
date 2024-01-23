import dotenv from 'dotenv';
dotenv.config()

module.exports = {
  development: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    // dialect: 'postgres',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    // define: {
    //   timestamps: true,
    //   underscored: true,
    // },
    // options: {
    //     logging: debug('sequelize')
    // },
    logQueryParameters: true,
    logging: (str) => (process.env.SHOW_SQL_LOGS ? console.log(`[SEQUELIZE DATABASE] ${str}`) : null),
  }
};