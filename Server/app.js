const http=require('http');
const fs=require('fs');

//HTTP => (request, response)

http.createServer((request, response)=>{
  //1. Código de status HTTP y content type

  const file=request.url=='/'? "./www/index.html": `./www/${request.url}`;
  fs.readFile(file,(err,data)=>{
   if(err){
     response.writeHead(500,{"Content-Type":"Text/plane"});
     response.write("Internal Server Error");
     response.end();
   }else{
     response.writeHead(200,{"Content-Type":"Text/html"});
     response.write(data);
     response.end();
   }
  });


}).listen(4444);


// PUERTOS 80=> HTTP 443=>HTTPS
