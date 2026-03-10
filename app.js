const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    if (req.url === "/pizza.jpg" || req.url === "/burger.jpg" || req.url === "/indian.jpg") {
        const imgPath = path.join(__dirname, req.url);
        fs.readFile(imgPath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("Image not found");
            } else {
                res.writeHead(200, { "Content-Type": "image/jpeg" });
                res.end(data);
            }
        });
    }

    else {

        const html = `
        <!DOCTYPE html>
        <html>
        <head>
        <title>Zomato DevOps</title>

        <style>

        body{
        font-family: Arial;
        background:#f5f5f5;
        margin:0;
        }

        .header{
        background:#e23744;
        color:white;
        padding:20px;
        font-size:32px;
        text-align:center;
        }

        .container{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:30px;
        padding:40px;
        }

        .card{
        background:white;
        border-radius:12px;
        box-shadow:0 4px 10px rgba(0,0,0,0.1);
        overflow:hidden;
        text-align:center;
        }

        .card img{
        width:100%;
        height:200px;
        object-fit:cover;
        }

        .card h2{
        margin:10px;
        }

        .card p{
        color:gray;
        padding-bottom:20px;
        }

        </style>

        </head>

        <body>

        <div class="header">
        Zomato DevOps Project
        </div>

        <div class="container">

        <div class="card">
        <img src="/pizza.jpg">
        <h2>Pizza Hub</h2>
        <p>Italian Pizza Restaurant</p>
        </div>

        <div class="card">
        <img src="/burger.jpg">
        <h2>Burger King</h2>
        <p>Best Burgers in Town</p>
        </div>

        <div class="card">
        <img src="/indian.jpg">
        <h2>Indian Spice</h2>
        <p>Authentic Indian Food</p>
        </div>

        </div>

        </body>
        </html>
        `;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    }

});

server.listen(3000);
