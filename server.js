require('dotenv').config({
  path: 'config/config.env',
});
const express = require('express');
const morgan = require('morgan');
require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
// Connect to database
connectDB();

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Middlewares
app.use(express.json());
// Mount Routers
app.use('/api/v1/bootcamps', require('./routes/bootcamps'));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} at http://localhost:${PORT}`
      .yellow.bold,
  ),
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`.red.bold);
  // Close server & exit process
  server.close(() => process.exit(1));
});
