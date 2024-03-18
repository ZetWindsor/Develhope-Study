import { createServer } from "node:http"

const server = createServer((request, response) => {
    console.log("request recived");

    response.ststus = 200;

    response.setHeader("Content-Type", "text.html");

    response.end("<html><body><h1>Questo server e' creato con Node.js!</h1></body></html>");

});

server.listen(3000 ,()=>{
    console.log(`server running at http://localhost:3000`);
})