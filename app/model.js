const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Products = sequelize.define('Products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    manufacturer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

(async () => {
    await Products.sync();
})();

module.exports = Products;