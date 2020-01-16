// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
const { Op } = require("sequelize");
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the events
  app.get("/api/events", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.userid = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.user
    db.Event.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Get route for retrieving a single event
  app.get("/api/events/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Event.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.get("/api/events/location/:location", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Event.findAll({
      where: {
        location: req.params.location
      },
      include: [db.User]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.get("/api/events/category/:category", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Event.findAll({
      where: {
        category: req.params.category
      },
      include: [db.User]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.get("/api/events/date/:datestart/:dateend", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Event.findAll({
      where: {
        datetime: 
        {[Op.between]: [req.params.datestart, req.params.dateend]}
      },
      include: [db.User]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // POST route for saving a new event
  app.post("/api/events", function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // DELETE route for deleting events
  app.delete("/api/events/:id", function(req, res) {
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // PUT route for updating events
  app.put("/api/events", function(req, res) {
    db.Event.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });
};
