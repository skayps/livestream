const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig');
const { tokenTypes } = require('../config/tokens');

//=================Token schema in SQL=======================================================
const Token = sequelize.define('Token', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,

  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [Object.values(tokenTypes)],
    },
  },
  expires: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  blacklisted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
});

module.exports = Token;
