// @flow
import Express from 'express';
import Path from 'path';
import Bodyparser from 'body-parser';

const distFolder = Path.resolve(__dirname, 'dist');
const staticFolder = Path.resolve(__dirname, 'client/static');
const PORT = 7654;

const express = Express();

express.use(Express.static(staticFolder));

express.use( (req, res, next) => {
  console.log('triumphantly using middleware!');
  next();
});

express.get('app.js', (req, res) => {
  console.log('looking for app');
  res.sendFile(Path.resolve(distFolder, 'bundle.js'));
});

module.exports = express;

// if (process.env.NODE_ENV !== 'test') {
//
// 	const app = Express();
// 	app.use(BodyParser.json());
// 	app.use('/', express);
//
// 	const port = process.env.port || PORT;
// 	app.listen(port);
// 	console.log('Listening on port', port);
//
// } else {
// 	module.exports = express;
// }
