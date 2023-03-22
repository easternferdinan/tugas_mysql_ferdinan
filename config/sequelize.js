const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'sql12607677',
    host: 'sql12.freemysqlhosting.net',
    username: 'sql12607677',
    password: '1cll9Yjmnw',
    dialect: 'mysql'
});

(async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    };
})();

module.exports = sequelize;