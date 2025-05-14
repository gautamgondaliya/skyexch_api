const express = require("express");
const route = express.Router();
const controller = require("../controller/controller")

route.get("/manu", controller.manuData);
route.get("/sports/:id", controller.sports);
route.get("/event/details/:id", controller.details);



route.get("/cricket",controller.fetchCricketMatches);
route.get("/soccer",controller.fetchSoccerMatches);
route.get("/tennis",controller.fetchTennisMatches);

module.exports = route

