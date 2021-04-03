const axios = require('axios');
const URL = process.env.OMDBAPI_URL;

const search = async (params) => {
  const result = await axios.get(URL, { params });
  return result;
}

const detail = async (params) => {
  const result = await axios.get(URL, { params });
  return result;
}

module.exports = {
  search,
  detail
}