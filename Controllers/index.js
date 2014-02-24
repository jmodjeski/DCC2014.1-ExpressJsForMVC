
var controllers = [
  require("./HomeController"),
  require("./SignupController")
];


var exports = module.exports = function(app){
  controllers.forEach(function(controller){
    controller(app);
  });
};