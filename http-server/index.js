import http from 'http';
import {readFileSync} from 'fs';

const args = process.argv.slice(2);
const PORT = (() => {
  // If no port is passed, default to 3000
  if (args.length <= 0)
    return 3000;

  return args[1];
})();

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
}).listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
