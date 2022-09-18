const express = require('express');
const bodyParser = require('body-parser'); //this will help in parsing the request body

app = express();

app.use(bodyParser.urlencoded({extended: false})) //this line of code will help in parsing the data from request.

// this is the middlewear which will execute every request
// `use` is the function which will help in creating middlewear whic will take a function as argument
// this function will have request response and `next` which will allow another middleware execution
app.use((req,res,next)=>{
  // console.log('********** Middleware ***********');
  next(); // allow next middleware to execute
});

app.use((req, res, next) => {
  // console.log('********** Middleware 2***********');
  // res.send('<h1>Hello there</h1>'); //this will return the response to the request where it's type will be `any`.
  next();
});

//this section will tell us how to handle different routes
app.use('/user',(req,res)=>{
  res.send('<h1>User page</h1>');
});

app.use('/add-user',(req,res)=>{
  res.send('<form action="/user-added" method="POST"><h1>Add User</h1><input type="text" name="Name"/><br><br><button type="submit">Submit</button></form>');//this will send the form to the request to endpoint /add-user. The form will agin request to below endpoint as next request.
})

app.use('/user-added',(req,res)=>{
  console.log(req.body);
  res.redirect('/');// this will redirect to `/` root rout after the above operation(s)
})

// `use` middleware will help in executing any type of the request `POST, GET, PATCH, DELETE, PUT` any requests.
// but we can have restricted set of request and must have restricted method request for particular end point.
// below code will take only post request, for other types of requests it will send the error
app.post('/post-req',(req,res)=>{
  console.log('Post request');
  res.send('done for the post');
});

app.get('/get-request',(req,res)=>{
  console.log(req.query)
  res.send(req.query);
})

app.use('/', (req, res) => {
  res.send('<h1>Home page</h1>');
});

app.listen(3000)
