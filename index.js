var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports =function(app)
{

var sql= require('./model');
  app.post('/process_post', urlencodedParser, function (req, res) {
     response = {
       user_name:req.body.user_name,
       password:req.body.password

     };

     sql.connection.query('SELECT * from user where username="'+response.user_name+'" and password="'+response.password+'" ', function(err, rows, fields) {
       if (!err){
         console.log('The solution is: ', rows);

       }
       else
       {
         console.log('Error while performing Query.');
     }



   app.session=response.user_name;

   if(rows[0]==null){

   res.redirect('error')
   }
   else {
   res.redirect('home')
   }
    });
     console.log(response);
  })

  app.post('/get', urlencodedParser, function (req, res) {
    response = {
        user_name:req.body.user_name,
        password:req.body.password

    };


  if(!response.user_name || !response.password){
    res.redirect('/register')
  }


  else{
    sql.connection.query('insert into user values("'+app.response.user_name+'","'+app.response.password+'")', function(err, rows, fields) {


  });

   res.redirect('/index')
  }

  })
}
