const { AccessLogModel } = require('../db/models');

const insert = async (data) => {
  if(!data || !Object.keys(data).length) return null;
  return await AccessLogModel.create(data);
}


module.exports = {
  insert
}