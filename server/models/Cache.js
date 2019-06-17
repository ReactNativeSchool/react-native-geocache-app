const mongoose = require("mongoose");

const CacheSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  foundCount: { type: Number, default: 0 }
});

module.exports = mongoose.model("Cache", CacheSchema);
