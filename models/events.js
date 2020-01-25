module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    activity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    description: {
      type: DataTypes.TEXT
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 140]
    },
    datetime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    limit: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Event.associate = function(models) {
    Event.belongsToMany(models.User, {
      through: "JoinersActivities"
    });
  };

  return Event;
};
