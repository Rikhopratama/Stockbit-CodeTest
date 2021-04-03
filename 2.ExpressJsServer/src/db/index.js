const Sequelize = require('sequelize');

const sequelize = new Sequelize('movie_search', 'root', null, {
  host: '127.0.0.1',
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log('Connection Established...');
}).catch(err => {
  console.log('Unable to connect database!')
  throw err;
});

module.exports = sequelize;