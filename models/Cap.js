const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const Cap = sequelize.define("caps",{
    name: DataTypes.STRING,
    register_number: DataTypes.STRING,
})

module.exports = Cap;