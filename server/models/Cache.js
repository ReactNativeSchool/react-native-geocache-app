const mongoose = require("mongoose");

const CacheSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
});

module.exports = mongoose.model("Cache", CacheSchema);
