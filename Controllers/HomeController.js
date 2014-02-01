
var exports = module.exports = function initialize(app){

  app.get('/', Index);

};


function Index(req, res, next){
  res.render("Home/index");
};