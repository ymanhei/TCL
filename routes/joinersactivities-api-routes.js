var db = require("../models");

module.exports = function(app) {
  /* app.get("/api/joinersactivities", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Event
    db.JoinersActivities.findAll({
      include: [db.Event,db.User]
    }).then(function(dbJoinersActivities) {
      res.json(dbJoinersActivities);
    });
  }); */

/*   app.get("/api/joinersactivities/:eventid", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Event
    db.JoinersActivities.findAll({
      where: {
        EventId: req.params.eventid
      }
    }).then(function(dbJoinersActivities) {
      res.json(dbJoinersActivities);
    });
  }); */

  /* app.get("/api/joinersactivities/:userid", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Event
    db.JoinersActivities.findAll({
      where: {
        UserId: req.params.userid
      }
    }).then(function(dbJoinersActivities) {
      res.json(dbJoinersActivities);
    });
  }); */

  app.post("/api/joinersactivities", function(req, res) {
     // console.log(req.body);
    db.JoinersActivities.create(req.body).then(function(dbJoinersActivities) {
      res.json(dbJoinersActivities);
    });
  });

  app.delete("/api/joinersactivities/:eventid/:userid", function(req, res) {
    var r = false;
     db.JoinersActivities.findOne({
        where: {
          EventId: req.params.eventid,
          UserId: req.params.userid
        }
      }).then(function(dbJoinersActivities) {
        if (dbJoinersActivities.EventOwner) {
            db.JoinersActivities.destroy({
                where: {
                  EventId: req.params.eventid
                }
              }).then(function(dbJoinersActivities) {
                db.Event.destroy({
                    where: {
                      id: req.params.eventid
                    }
                  }).then(function(dbJoinersActivities) {
                    res.json(dbJoinersActivities);
                  });
              });             
          }
          else{
            db.JoinersActivities.destroy({
                where: {
                  EventId: req.params.eventid,
                  UserId: req.params.userid
                }
              }).then(function(dbJoinersActivities) {
                res.json(dbJoinersActivities);
              }); 
    
          } 
      });
      
      
     
  });

};
