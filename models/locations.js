// Locations table, which stores preloaded and added location data.

module.exports = function(sequelize, DataTypes) {
    var Locations = sequelize.define("Locations", {
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
        img: DataTypes.STRING,  
        locDesc: {
          type : DataTypes.TEXT,
          allowNull : false,
          validate: {
            len: [1] }
          },
        nature: DataTypes.INTEGER,
        culture: DataTypes.INTEGER, 
        cost : DataTypes.INTEGER,
        history : DataTypes.INTEGER,
        adventure : DataTypes.INTEGER,
        urban : DataTypes.INTEGER,
        activity : DataTypes.INTEGER,
        climate : DataTypes.INTEGER,
        access : DataTypes.INTEGER,
        stay : DataTypes.INTEGER
      });
      return Locations;
  };