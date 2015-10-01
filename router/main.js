var expressSession = require('express-session');
var cookieParser = require('cookie-parser');

module.exports = function(app)
{
  app.use(cookieParser());
  app.get('/compose',function(req,res){
    res.render('compose.html',{ title: app.session});

  });



     app.get('/',function(req,res){
        res.render('index.html');
     });
     app.get('/index',function(req,res){
        res.render('index.html');
     });
     app.get('/home',function(req,res){
         app.use(expressSession({secret:'somesecrettokenhere'}));
       req.expressSession=app.session
        res.render('home.html',{ title: req.expressSession });

        app.get('/logout',function(req,res){
          res.render('index.html');
      });
    });
    app.get('/error',function(req,res){
       res.render('error.html');
   });
   app.get('/register',function(req,res){
      res.render('register.html');
  });

}
