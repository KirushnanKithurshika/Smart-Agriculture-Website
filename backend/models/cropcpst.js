const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  LandCost: { type: Number, default: 0 },
  Fertilizer: { type: Number, default: 0 },
  Seed: { type: Number, default: 0 },
  Chemical: { type: Number, default: 0 },
});

const CropSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  expenses: { type: ExpenseSchema, required: true },
});

module.exports = mongoose.model("Crop", CropSchema);
