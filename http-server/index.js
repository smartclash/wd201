import http from 'http';
import {readFileSync} from 'fs';

const homeFile = readFileSync('home.html').toString();
const projectFile = readFileSync('project.html').toString();

http.createServer((request, response) => {
  const URL = request.url;

  response.writeHead(200, { "Content-Type": "text/html" });
  switch (URL) {
    case "/project":
      response.write(projectFile);
      break;
    default:
      response.write(homeFile);
      break;
  }

  response.end();
}).listen(3000);
