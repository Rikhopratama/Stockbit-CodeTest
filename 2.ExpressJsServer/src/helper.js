const getAcceptedParams = (query, acceptedParams) => {
  const params = {};

  Object.keys(query).forEach(p => {
    if(acceptedParams.includes(p)) params[p] = query[p];
  });
  
  return params;
}

module.exports = {
  getAcceptedParams
}