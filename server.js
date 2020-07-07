const express = require('express');
require('dotenv').config({
  path: 'config/config.env',
});

const app = express();

// Mount Routers
app.use('/api/v1/bootcamps', require('./routes/bootcamps'));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} at http://localhost:${PORT}`,
  ),
);
