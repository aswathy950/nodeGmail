module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/index',function(req,res){
        res.render('index.html')
     });
     app.get('/home',function(req,res){
        res.render('home.html',{ title: app.session });
    });
    app.get('/error',function(req,res){
       res.render('error.html');
   });
   app.get('/register',function(req,res){
      res.render('register.html');
  });
}
