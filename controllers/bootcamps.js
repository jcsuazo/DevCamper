// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getBootcamps = (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public
const getBootcamp = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show a bootcamp ${req.params.id}` });
};

// @desc    Create new bootcamps
// @route   POST /api/v1/bootcamps
// @access  Priate
const createBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamps' });
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Priate
const updateBootcamp = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update a bootcamp ${req.params.id}` });
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Priate
const deleteBootcamp = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};

module.exports = {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
