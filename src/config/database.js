import dotenv from 'dotenv';
dotenv.config()

console.log('process.env.DATABASE_HOST,', process.env.DATABASE_HOST, 'process.env.DATABASE_USER', process.env.DATABASE_USER, 'process.env.DATABASE_PASSWORD', process.env.DATABASE_PASSWORD)
console.log('process.env.DATABASE_PORT,', process.env.DATABASE_PORT)
console.log('process.env.DATABASE_NAME,', process.env.DATABASE_NAME)

module.exports = {
  development: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    // dialect: 'postgres',
    dialect: 'mysql',
    // define: {
    //   timestamps: true,
    //   underscored: true,
    // },

    // options: {
    //     logging: debug('sequelize')
    // }

    // logQueryParameters: true,
    // logging: (str) => (process.env.SHOW_SQL_LOGS ? console.log(`[SEQUELIZE DATABASE] ${str}`) : null),
  }
};