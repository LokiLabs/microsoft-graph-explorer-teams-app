const express = require('express');
const bodyparser = require('body-parser');
const env = require('dotenv')
const path = require('path');

const auth = require('./auth');
const indexRouter = require('./routes/index');
require('isomorphic-fetch');


const app = express();

app.use(express.static(__dirname + '/Styles'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname);

const ENV_FILE = path.join(__dirname, '.env');
require('dotenv').config({ path: ENV_FILE });
app.use('/',indexRouter);

app.get('/configure', function(req, res) {
  res.render('./views/configure');
  console.log("configure")
});

app.get('/Styles/config.css', function(req, res) {
  console.log("server.js rendering style css")
  res.render('./Styles/config.css')
});


app.get('/justbutton', function(req, res) {   
  console.log("server justbutton")
  auth.getAccessToken().then(async function (token) {
    console.log("token from js file : "+ token);
    res.render('./views/justbutton' ,{token:JSON.stringify(token)})
  });
}); 


app.get('/rscdemo', function(req, res) {   
  auth.getAccessToken(tenantId).then(async function (token) {
    console.log("token from js file : "+ token);
    res.render('./views/rscdemo',{token:JSON.stringify(token)});
  });
  
});

app.listen(3978 ||3978, function () {
  console.log('app listening on port 3333!');
});

 
