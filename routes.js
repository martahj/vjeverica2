// @flow
import Express from 'express';
import Path from 'path';
import Bodyparser from 'body-parser';

const distFolder = Path.resolve(__dirname, 'dist');
console.log('dist folder', distFolder);
const staticFolder = Path.resolve(__dirname, 'static');
const PORT = 7654;

const routes = Express();

routes.use(Express.static(staticFolder));

routes.use( (req, res, next) => {
  console.log('got req', req.url);
  next();
});

routes.get('/app.js', (req, res) => {
  console.log('looking for app');
  res.sendFile(Path.resolve(distFolder, 'bundle.js'));
});

module.exports = routes;
