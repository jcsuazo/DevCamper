const express = require('express');
require('dotenv').config({
  path: 'config/config.env',
});

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});
app.get('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show a bootcamp ${req.params.id}` });
});
app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamps' });
});
app.put('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update a bootcamp ${req.params.id}` });
});
app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} at http://localhost:${PORT}`,
  ),
);
