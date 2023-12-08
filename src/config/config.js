require('dotenv').config();

module.exports = {
    postgresql: {
        development: {
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            host: process.env.DATABASE_HOST,
            dialect: 'postgres',
            port: process.env.DATABASE_PORT,
            logQueryParameters: true,
            logging: (str) => (process.env.SHOW_SQL_LOGS ? console.log(`[SEQUELIZE DATABASE] ${str}`) : null),
        },
        test: {
            username: process.env.DATABASE_TEST_USER,
            password: process.env.DATABASE_TEST_PASSWORD,
            database: process.env.DATABASE_TEST_NAME,
            host: process.env.DATABASE_TEST_HOST,
            dialect: 'postgres'
        },
        production: {
            username: process.env.DATABASE_PROD_USER,
            password: process.env.DATABASE_PROD_PASSWORD,
            database: process.env.DATABASE_PROD_NAME,
            host: process.env.DATABASE_PROD_HOST,
            dialect: 'postgres'
        }
    }
}