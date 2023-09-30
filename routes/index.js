const myController = require("../controller");
const routes = requuire("express").Router();

routes.get("/", myController.awesomeFunction);

module.exports = routes;
