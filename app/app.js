const Hapi = require('hapi');

const server = new Hapi.Server();

const Inert = require('inert');

const ApiGF = require('./api/GF');

server.connection({ port: process.env.PORT, labels: ['api'] });

server.register(Inert, (_err) => {
  if (_err) {
    throw _err;
  }

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public',
      },
    },
  });
});

server.register(ApiGF, (_err) => {
  if (_err) { throw _err; }
});

server.start((_err) => {
  if (_err) { throw _err; }

  console.log(`Server running at: ${server.select('api').info.uri}`);
});
