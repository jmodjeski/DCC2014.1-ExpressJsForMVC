
var controllers = [
  require("./HomeController"),
  require("./SignupController")
];


var exports = module.exports = function(app){
  // pre-initialize
  controllers.forEach(function(controller){
    controller.setup(app);
  });
  // initialize routes
  controllers.forEach(function(controller){
    controller.initialize(app);
  });
};
