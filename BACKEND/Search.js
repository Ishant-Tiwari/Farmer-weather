const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
  location: String,
  lat: Number,
  lon: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Search', SearchSchema);
