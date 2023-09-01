const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }else if (req.url === '/about') {
        res.end('Here is the about page.')
    } else {
        res.end(`<h1>Error!</h1><p>No page with the given url</p><a href="/">Click here to go to home</a>
        `)
    }
})

server.listen(5000)