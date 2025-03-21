const http = require("http");

const port = 8081;  // local port num

// HTTP Methods


http
   .createServer((req, res) => { // call back function
    res.writeHead(200, { "content-Type": "text/html" });
    res.write("<h2>hey server started :-) 123456 </h2>");
    res.end();
   })
   .listen(port, () => { // call back function
    console.log(`NodeJs Server Started Running on port ${port}`);
   });

   // http://localhost:8081

   