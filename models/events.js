module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    activity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,140]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,140]
      }
    },
    description: {
      type: DataTypes.TEXT
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1,140]
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    limit: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    
  });

  /* Event.associate = function(models) {
    // We're saying that a Event should belong to an user
    // A Event can't be created without an user due to the foreign key constraint
    Event.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }; */

    Event.associate = function(models) {
    // We're saying that a Event should belong to an initiator
    // A Event can't be created without an initiator due to the foreign key constraint
    Event.belongsToMany(models.User, {
      through: "JoinersActivities"
    });
  };  

  return Event;
};
