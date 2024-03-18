import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    "<html><body><h1>in questo esercizio devo solo cambaire questo testo, potevano fare un esercizio magari dove correggere eventuali errori...</h1></body></html>"
  );
});

server.listen(3001, () => {
  console.log(`Server running at http://localhost:3001`);
});
