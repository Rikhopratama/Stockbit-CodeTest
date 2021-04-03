const { accessLog } = require('./services');

const recordAccessLog = async (req, res, next) => {
  await accessLog.insert({
    endpoint: req.path,
    params: JSON.stringify(req.query),
    created_at: Date.now()
  })

  next();
}

const mandatoryQueryParams = (req, res, next) => {
  if (!Object.keys(req.query).length) {
    throw {
      status: 401,
      message: 'Must include query params!'
    };
  }
  next();
}

module.exports = {
  mandatoryQueryParams,
  recordAccessLog
}