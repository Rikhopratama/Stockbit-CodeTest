const controllerFunction = require('./controller');
const { mandatoryQueryParams, recordAccessLog } = require('./middleware');

const routes = (app) => {
  app.get('/search', [mandatoryQueryParams, recordAccessLog], controllerFunction.search);
  app.get('/detail', [mandatoryQueryParams, recordAccessLog], controllerFunction.detail);
}

module.exports = routes;