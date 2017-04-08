require('babel-register');
const Express = require('express');
const Bodyparser = require('body-parser');
const routes = require('./routes');

const app = Express();
app.use(Bodyparser.json());
app.use('/', routes);

const port = process.env.port || 7654;
app.listen(port);
console.log('Listening on port', port);
