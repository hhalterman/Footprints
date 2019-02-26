// Users table, which stores user data.

module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        len: [1] }
      },
    firstName : {
      type : DataTypes.STRING,
      allowNull : false, 
      validate : {
        len: [1] }
      },
    lastName: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        len: [1] }
      },
    nature: DataTypes.INTEGER,
    cost : DataTypes.INTEGER,
    history : DataTypes.INTEGER,
    adventure : DataTypes.INTEGER,
    urban : DataTypes.INTEGER,
    activity : DataTypes.INTEGER,
    climate : DataTypes.INTEGER,
    access : DataTypes.INTEGER,
    stay : DataTypes.INTEGER,
    culture : DataTypes.INTEGER
  });
  return users;
};

