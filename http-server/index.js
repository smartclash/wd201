const http = require('http');
const {readFileSync} = require('fs');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const PORT = args.port || 3000;

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
