const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req);
    if(req.url === "/"){
        res.write("Welcome to our home page.");
    }
    else if(req.url === "/about"){
        res.write("Welcome to our about page.");
    }
    res.end('<b> HEllo HTML served! </b> <a href = "/">back home </a>');
})
server.listen(3001)