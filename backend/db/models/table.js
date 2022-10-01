'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Table.init({
    date: {
      type: DataTypes.DATE,
    },
    title: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    distance: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Table',
  });
  return Table;
};
