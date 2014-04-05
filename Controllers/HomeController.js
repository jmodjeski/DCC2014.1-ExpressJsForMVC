
var exports = module.exports = {
  setup: function(app){

  },
  initialize: function initialize(app){
    app.get('/', Index);
  }
};


function Index(req, res, next){
  res.render("Home/index");
};
