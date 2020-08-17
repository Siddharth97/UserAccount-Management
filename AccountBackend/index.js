const express = require('express');//Attempt 2
const bodyParser = require('body-parser');//this is to use json from post
const mongoose = require('mongoose');
const Account = require('./models/account');
var cors = require('cors');
//set up express app
const app = express();
var http = require('http');
http.createServer(app);


//connect to mongodb
mongoose.connect('mongodb://localhost/accountschema').then(() => console.log('Connected to MongoDB...')).catch(err => console.error('Could not connect to MongoDB...'));
mongoose.Promise = global.Promise;

app.use(bodyParser.json());//access to using json stuff
app.use(cors());

//initialize routes
//app.use('/api',require('./routes/api'));

//Maybe remove everything from the methods in API?
app.use(function(req, res, next) {
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.send('Hello this is a test');
     });



//Users-----------------------------------------------
//Send them all
   app.get('/api/accounts', function(req, res, next){
          Account.find().then(function(account){
            res.header('Access-Control-Expose-Headers', 'X-Total-Count');
            res.set("x-total-count", 8);
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
           res.send(account);
          });
   });

    //get a specific account based by accountNumber
    app.get('/api/accounts/:accountNumber', function(req, res, next){
    Account.findOne({accountNumber: req.params.accountNumber}).then(function(account){ 
        res.header('Access-Control-Expose-Headers', 'X-Total-Count');
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.send(account);
        });
    });

     //get a specific account based by id
     app.get('/api/accounts/:id', function(req, res, next){
        Account.findOne({id: req.params.id}).then(function(account){ 
            res.header('Access-Control-Expose-Headers', 'X-Total-Count');
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.send(account);
            });
        });

    
    
    
    //Add a new account to the database
    app.post('/api/accounts', function(req, res, next){ 
    Account.create(req.body).then(function(account){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
           res.send(account);
        });
       //}).catch(next);
      });
   
   //update a account in the database
   app.put('/api/accounts/:accountNumber', function(req, res, next){
       Account.findOneAndUpdate({accountNumber: req.params.accountName}, req.body).then(function(){
       Account.findOne({accountNumber:req.params.accountName}).then(function(account){
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                res.send(account);
           });
          });
   });
   
   //Delete a account from the database
   app.delete('/api/accounts/:accountNumber', function(req, res, next){
       Account.findByIdAndRemove({_id: req.params.accountNumber}).then(function(account){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
           res.send(account);
       });
    });
  
    app.listen(8080, function(){
        console.log('now listening for requests');
        });