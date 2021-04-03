const { INTEGER, STRING, DATE } = require('sequelize');
const sequelize = require('../index');

const AccessLogModel = sequelize.define('access_log', {
  id: {
    type: INTEGER,
    primaryKey: true
  },
  endpoint: STRING,
  params: STRING,
  created_at: DATE
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = AccessLogModel;