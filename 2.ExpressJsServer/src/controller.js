const omdbAPI = require('./api/omdb');
const { getAcceptedParams } = require('./helper');

const search = async (req, res, next) => {
  try {
    const params = getAcceptedParams(req.query, ['s', 'type', 'y', 'page']);
    const result = await omdbAPI.search(params);

    res.send({
      status: true,
      message: 'success',
      omdbResultStatus: result.data.Response,
      resultCount: result.data.totalResults,
      data: result.data.Search
    });
  } catch(err) {
    next(err);
  }
}

const detail = async (req, res) => {
  try {
    const params = getAcceptedParams(req.query, ['i', 't', 'y', 'type', 'plot']);
    const result = await omdbAPI.detail(params);
    
    res.send({
      status: true,
      message: 'success',
      omdbResultStatus: result.data.Response,
      data: result.data
    });
  } catch (error) {
    next(error)
  }
 
}

module.exports = {
  search,
  detail
};