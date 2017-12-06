const hapi = require("hapi");

const api = require("./api");

const server = new hapi.Server();

server.connection({
  host: "localhost",
  port: 4040,
  router: { stripTrailingSlash: true },
  routes: { cors: true }
});

server
  .register([{ register: api }])
  .then(() => {
    server
      .start()
      .then(() => console.log(server.info.uri))
      .catch(error => console.log(error));
  })
  .catch(err => console.log(err));
