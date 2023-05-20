const { Sequelize } = require("sequelize");
//=============================User schema in SQL================================

const User = Sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
    validate: {
      len: [8, Infinity],
      isPasswordValid(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
      },
    },
    private: true, // used by the toJSON plugin
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'admin',

  },
  isEmailVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
