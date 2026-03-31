const mongoose = require("mongoose");

const platformSchema = new mongoose.Schema({
  name: String,
  price: Number,
  discount: Number,
  delivery: Number,
  link: String,
});

const foodSchema = new mongoose.Schema({
  item: String,
  restaurant: String,
  platforms: [platformSchema],
});

module.exports = mongoose.model("FoodListing", foodSchema);