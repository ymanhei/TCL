module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Joiner model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,140]
      }
    },
    phone_number: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,255]
      }
    },
    gender: { 
      type: DataTypes.STRING
    }
  });

 /*  User.associate = function(models) {
    // Associating Joiner with Events
    // When an user is deleted, also delete any associated Events
    User.hasMany(models.Event, {
      onDelete: "cascade"
    });
  }; */

   User.associate = function(models) {
    // Associating Users with Events
    // When an Users is deleted, also delete any associated Events
    User.belongsToMany(models.Event, {
      through: "JoinersActivities"
    });
  }; 

  return User;
};