
var controllers = [
  require("./HomeController"),
];


var exports = module.exports = function(app){
  controllers.forEach(function(controller){
    controller(app);
  });
};