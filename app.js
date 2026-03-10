const http = require("http");

const server = http.createServer((req,res)=>{
res.write("Zomato DevOps App Running Successfully");
res.end();
});

server.listen(3000);
