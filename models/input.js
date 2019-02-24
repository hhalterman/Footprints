// Input table which stores user input for comments and location suggestions.

module.exports = function(sequelize, DataTypes) {
    var Input = sequelize.define("Input", {
      username: {
        type : DataTypes.STRING,
        allowNull : false,
        validate: {
          len: [1] }
      },
        city : {
        type : DataTypes.STRING,
        allowNull : false, 
        validate : {
          len: [1] }
        },
        country: {
        type: DataTypes.STRING,
        allowNull : false,
        validate : {
          len: [1] }
        },
      description: {
        type : DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      comment: {
          type : DataTypes.STRING,
          allowNull : true,
          defaultValue: "",
          },
    });
      return Input;
    };