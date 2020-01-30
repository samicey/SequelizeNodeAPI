'use strict';

module.exports = function (sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  Book.associate = function (models) {// associations can be defined here
  };

  return Book;
};
//# sourceMappingURL=book.js.map