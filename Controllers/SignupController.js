

var exports = module.exports = {

  setup: function(app){
    app.use('/signup', function(req, res, next){

        req.model = {
          email: req.body.email,
          confirmEmail: req.body.confirmEmail,
          password: req.body.password,
          confirmPassword: req.body.confirmPassword
        };

      // setup a default response model
      res.model = {
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        errorMessage: false
      };
      next();
    });
  },

  initialize: function(app){
    app.get('/signup', Index);
    app.post('/signup', Create);
  }

};

function Index(req, res, next){
  res.render("Signup/index", res.model);
};

function Create(req, res, next){

  res.model = req.model;

  if(!validateModel(res.model))
  {
    res.render("Signup/index", res.model);
  }
  else
  {
    res.render("Signup/created", res.model);
  }
};

function validateModel(model){

  if(model.email != model.confirmEmail)
  {
    model.errorMessage = "Email and Confirm Email must match.";
  }
  else if(model.password != model.confirmPassword)
  {
    model.errorMessage = "Password and Confirm Password must match."
  }
  else if(!model.email)
  {
    model.errorMessage = "Email is required";
  }
  else if(!model.password)
  {
    model.errorMessage = "Password is required";
  }

  return !(model.errorMessage);
};
