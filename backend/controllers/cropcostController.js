const Crop = require("../models/Crop");

// Get all crops
exports.getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find();
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new crop
exports.addCrop = async (req, res) => {
  try {
    const { name } = req.body;
    const newCrop = new Crop({
      name,
      expenses: { LandCost: 0, Fertilizer: 0, Seed: 0, Chemical: 0 },
    });
    await newCrop.save();
    res.status(201).json(newCrop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update crop expenses
exports.updateExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    const { expenses } = req.body;
    const updatedCrop = await Crop.findByIdAndUpdate(
      id,
      { $set: { expenses } },
      { new: true }
    );
    res.status(200).json(updatedCrop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a crop
exports.deleteCrop = async (req, res) => {
  try {
    const { id } = req.params;
    await Crop.findByIdAndDelete(id);
    res.status(200).json({ message: "Crop deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new expense field to all crops
exports.addExpenseField = async (req, res) => {
  try {
    const { expenseName } = req.body;
    const crops = await Crop.updateMany(
      {},
      { $set: { [`expenses.${expenseName}`]: 0 } }
    );
    res.status(200).json({ message: "Expense field added successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an expense field from all crops
exports.deleteExpenseField = async (req, res) => {
  try {
    const { expenseName } = req.body;
    const crops = await Crop.updateMany(
      {},
      { $unset: { [`expenses.${expenseName}`]: "" } }
    );
    res.status(200).json({ message: "Expense field deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
