const Bootcamp = require('../models/Bootcamp');
const asynHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
// eslint-disable-next-line no-unused-vars
const getBootcamps = asynHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find().lean();
  console.log(bootcamps);
  return res
    .status(200)
    .json({ count: bootcamps.length, success: true, data: bootcamps });
});

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public
const getBootcamp = asynHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id).lean();
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404),
    );
  }
  return res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Create new bootcamps
// @route   POST /api/v1/bootcamps
// @access  Priate
// eslint-disable-next-line no-unused-vars
const createBootcamp = asynHandler(async (req, res, next) => {
  const newBootcamp = await Bootcamp.create(req.body);
  res.status(201).json(newBootcamp);
});

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Priate
const updateBootcamp = asynHandler(async (req, res, next) => {
  const updatedBootcamp = await Bootcamp.findByIdAndUpdate(
    req.params.id,
    req.body,
  );
  if (!updatedBootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404),
    );
  }
  return res.status(200).json(updatedBootcamp);
});

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Priate
const deleteBootcamp = asynHandler(async (req, res, next) => {
  const updatedBootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!updatedBootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404),
    );
  }
  return res.status(201).json({ success: true, data: {}, remove: 'remove' });
});

module.exports = {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
