const Sequelize = require("sequelize");
require("dotenv").config();


const sequelize = new Sequelize('demo', 'root', 'poiuytrr', {
    host: 'localhost',
    port: 3306,
    dialect: "mysql",
});
const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected with database: " + 'demo');
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

checkConnection();
module.exports = sequelize;