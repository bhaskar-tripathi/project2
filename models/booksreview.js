/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
module.exports = function(sequelize, DataTypes) {
  var Reviews = sequelize.define('Reviews', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Reviews.associate = function(models) {
    // We're saying that a Comment should belong to a Book
    // A Review can't be created without a Book due to the foreign key constraint
    Reviews.belongsTo(models.Book, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Reviews;
};
