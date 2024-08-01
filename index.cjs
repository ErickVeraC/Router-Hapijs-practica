const Hapi = require("@hapi/hapi");

const init = async () => {
  const app = Hapi.server({
    port: 8080,
    host: "localhost",
  });

  app.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Houston: Aqui localhost, cambio...";
    },
  });

  await app.start();
  console.log("Server running on %s", app.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
