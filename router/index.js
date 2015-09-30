
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports =function(app)
{

var sql= require('./model');
  app.post('/process_post', urlencodedParser, function (req, res) {
     response = {
       email:req.body.email,
       password:req.body.password

     };

     sql.connection.query('SELECT * from users where email="'+response.email+'" and password="'+response.password+'" ', function(err, rows, fields) {
       if (!err){
         console.log('The solution is: ', rows);

       }
       else
       {
         console.log('Error while performing Query.');
     }



   app.session=response.email;

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
        firstname:req.body.firstname,
          lastname:req.body.lastname,
          email:req.body.email,
        password:req.body.password,
        dob:req.body.dob,
        gender:req.body.gender,
        mobile:req.body.mobile,
        location:req.body.location

    };

   console.log(response);
  if(!response.email || !response.password){

    res.redirect('/register')
  }


  else{
    sql.connection.query('insert into users (first_name,last_name,email,password,date_of_birth,gender,mobile,location) values("'+response.firstname+'","'+response.lastname+'","'+response.email+'","'+response.password+'","'+response.dob+'","'+response.gender+'","'+response.mobile+'","'+response.location+'")', function(err, rows, fields) {


  });

   res.redirect('/index')
  }

  })
}
