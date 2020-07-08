const { Schema, model } = require('mongoose');

const defaultBoolean = {
  type: Boolean,
  default: false,
};
const requireString = (msg = '') => {
  const obj = {
    type: String,
    required: [true, msg],
  };
  return obj;
};
const StringMatch = (rgx, msg) => {
  const obj = {
    type: String,
    match: [rgx, msg],
  };
  return obj;
};
const BootcampSchema = new Schema({
  name: {
    ...requireString('Please add a name'),
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  slug: String,
  description: {
    ...requireString('Please add a description'),
    maxlength: [500, 'Description can not be more than 500 characters'],
  },
  website: {
    ...StringMatch(
      // eslint-disable-next-line no-useless-escape
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with http or https',
    ),
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number can not be longer than 20 characters'],
  },
  email: {
    ...StringMatch(
      // eslint-disable-next-line no-useless-escape
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ),
  },
  address: {
    ...requireString('Please add an address'),
  },
  location: {
    // GEOJSON POIN
    type: {
      type: String,
      enum: ['point'],
      // required: true,
    },
    coordinates: {
      type: [Number],
      // required: true,
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  careers: {
    // Array of strings
    type: [String],
    required: true,
    enum: [
      'Web Development',
      'Mobile Development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other',
    ],
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating can not be more than 10'],
  },
  averageCost: Number,
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  housing: {
    ...defaultBoolean,
  },
  jobAssistance: {
    ...defaultBoolean,
  },
  jobGuarantee: {
    ...defaultBoolean,
  },
  acceptGi: {
    ...defaultBoolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Bootcamp', BootcampSchema);
