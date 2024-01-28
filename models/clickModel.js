const mongoose = require("mongoose");

const ClickSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Click", ClickSchema);
