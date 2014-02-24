
var exports = module.exports = function initialize(app){

  app.get('/signup', Index);
  app.post('/signup', Create);
};


function Index(req, res, next){
  res.render("Signup/index");
};

function Create(req, res, next){

  
  res.render("Signup/index");
};