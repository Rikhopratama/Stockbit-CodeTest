require('dotenv').config();

const express = require('express')
const app = express();
const routes = require('./routes');
const sequelize = require('./db')
const { HTTP_STATUS } = require('./config/constants');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
routes(app);

// 404 handler
app.use('*', (req, res) => {
  res.status(HTTP_STATUS.NOT_FOUND).send({
    status: false,
    message: 'Request Not Found'
  });
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || HTTP_STATUS.SERVER_ERROR).send({
    status: false,
    message: err
  })
})

// run server
app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});

module.exports = app;