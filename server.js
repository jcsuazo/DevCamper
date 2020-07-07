require('dotenv').config({
  path: 'config/config.env',
});
const express = require('express');
const morgan = require('morgan');

const app = express();
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Mount Routers
app.use('/api/v1/bootcamps', require('./routes/bootcamps'));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} at http://localhost:${PORT}`,
  ),
);
