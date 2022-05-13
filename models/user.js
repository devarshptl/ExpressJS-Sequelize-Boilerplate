'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here
    }
  }
  user.init({
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    uname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/gi,
      },
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'users',
    modelName: 'User',
  });
  return user;
};
