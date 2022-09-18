const http = require('http');

const server = http.createServer((req,res)=>{
  const url = req.url;
  if(url=== '/')
  {
    res.write('this is root route');
    return res.end();
  }

  if(url==='/message')
  {
    res.write('this is message route');
    return res.end();
  }
  res.write('this is annonimus request');
  res.end();
}).listen(8080)
