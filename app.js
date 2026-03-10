const http = require("http");

const html = `
<!DOCTYPE html>
<html>
<head>
<title>Zomato DevOps</title>
<style>
body{
font-family: Arial;
background:#f8f8f8;
text-align:center;
}
.header{
background:#e23744;
color:white;
padding:20px;
font-size:28px;
}
.card{
background:white;
margin:20px auto;
padding:20px;
width:300px;
border-radius:10px;
box-shadow:0 2px 10px rgba(0,0,0,0.1);
}
</style>
</head>

<body>

<div class="header">
Zomato DevOps Project
</div>

<div class="card">
<h2>Pizza Hub</h2>
<p>Italian Pizza Restaurant</p>
</div>

<div class="card">
<h2>Burger King</h2>
<p>Best Burgers in Town</p>
</div>

<div class="card">
<h2>Indian Spice</h2>
<p>Authentic Indian Food</p>
</div>

</body>
</html>
`;

const server = http.createServer((req,res)=>{
res.write(html);
res.end();
});

server.listen(3000);
