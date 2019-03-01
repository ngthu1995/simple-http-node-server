var fs = require("fs");
const http = require("http");
const port = 3000;

const requestHandler = (request, response) => {
  fs.writeFile("hello-world.txt", "Hello to this great world", "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
  response.write("The file is created.");
  response.end();
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log(`You have an error: ${err}`);
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
