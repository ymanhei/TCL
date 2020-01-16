module.exports = function(sequelize, DataTypes) {
  var JoinersActivities = sequelize.define("JoinersActivities", {
    // Giving the Joiner model a name of type STRING
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: sequelize.models.User, 
        key: 'id'
      }
    },
    EventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: sequelize.models.Event, 
            key: 'id'
          }
      },
      EventOwner: {
        type: DataTypes.BOOLEAN,
        allowNull: false       
      }
  });

/*   JoinersActivities.associate = function(models) {
    // Associating Users with Events
    // When an Users is deleted, also delete any associated Events
    sequelize.models.User.belongsToMany(models.Event, {
      through: "JoinersActivities"
    });
  };  

  JoinersActivities.associate = function(models) {
    // Associating Users with Events
    // When an Users is deleted, also delete any associated Events
    sequelize.models.Event.belongsToMany(models.User, {
      through: "JoinersActivities"
    });
  };  */

  return JoinersActivities;

};