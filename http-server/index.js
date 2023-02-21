import http from 'http';
import {readFileSync} from 'fs';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const PORT = argv['port'] || 3000;

const homeFile = readFileSync('home.html').toString();
const projectFile = readFileSync('project.html').toString();
const registrationFile = readFileSync('registration.html').toString();

http.createServer((request, response) => {
  const URL = request.url;

  response.writeHead(200, { "Content-Type": "text/html" });
  switch (URL) {
    case "/project":
      response.write(projectFile);
      break;
    case "/registration":
      response.write(registrationFile);
      break;
    default:
      response.write(homeFile);
      break;
  }

  response.end();
}).listen(PORT);
