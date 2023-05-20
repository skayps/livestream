const path = require("path");
const fs = require("fs");
const Sequelizes = require("sequelize");

const basename = path.basename(__filename);
const db = {};
try {
    let sequelize;

    sequelize = new Sequelizes(
        'demo',
        'root',
        'poiuytrr',
        {
            logging: false,
            host: 'localhost',
            port: '3306',
            dialect: "mysql"
        }
    );
    fs.readdirSync(__dirname)
        .filter(
            (file) =>
                file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
        )
        .forEach((file) => {
            const model = require(path.join(__dirname, file))(
                sequelize,
                Sequelize.DataTypes
            );
            // console.log(model.name)
            db[model.name] = model;
        });

    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelizes;
    // console.log(db)
    module.exports = db;
} catch (error) {
    console.log("Error in database syncing")
}