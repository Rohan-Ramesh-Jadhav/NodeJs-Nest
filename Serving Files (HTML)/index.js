const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded(
  { extended: false }
));

app.get('/',(req,res)=>{
  // This part of the code will serve the files to the request.
  // sendFile is the method which will serve the file pointing by the path
  // We can't give the `/` during the path since it is used for routing.
  // For that reason we will use core package to node called `path`
  // __dirname will give the path to the current file folder path
  // We can give the next folder or file name with `,` separation but no `/` or `\`
  // To navigate back we can use `../` with `,` separation

  res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.use('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'views','pageNotFound.html'));
})

app.listen(PORT,()=>{
  console.log(`listening to port ${PORT}`);
})
