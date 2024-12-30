import Crop from "../models/cropcost.js";




// Get all crops
export const getCrops = async (req, res) => {
  try {
    const crops = await Crop.find();
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new crop
export const addCrop = async (req, res) => {
  const { name } = req.body;
  try {
    const newCrop = new Crop({ name });
    await newCrop.save();
    res.status(201).json(newCrop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addExpense = async (req, res) => {
    const { expenseName } = req.body;
  
    if (!expenseName) {
      return res.status(400).json({ message: "Expense name is required" });
    }
  
    try {
      const crops = await Crop.find();
  
      for (const crop of crops) {
        if (!crop.expenses.has(expenseName)) { // Check if the expense exists
          crop.expenses.set(expenseName, 0); // Add expense with a default value of 0
          await crop.save();
        }
      }
  
      res.status(200).json({ message: "Expense added to all crops successfully" });
    } catch (error) {
      res.status(500).json({ message: "An error occurred while adding the expense", error: error.message });
    }
  };
  

export const updateExpense = async (req, res) => {
  const { cropName, expenseName, value } = req.body;

  try {
    // Find the crop by name
    const crop = await Crop.findOne({ name: cropName });

    if (!crop) {
      return res.status(404).json({ message: "Crop not found" });
    }

    // Update the expense value
    crop.expenses.set(expenseName, value); // Use .set for Map in Mongoose
    await crop.save(); // Save the updated document

    res.status(200).json({ message: "Expense updated successfully!", crop });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Delete a crop
export const deleteCrop = async (req, res) => {
  const { name } = req.params;
  try {
    await Crop.deleteOne({ name });
    res.status(200).json({ message: 'Crop deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an expense
export const deleteExpense = async (req, res) => {
  const { cropName, expenseName } = req.body;
  try {
    const crop = await Crop.findOne({ name: cropName });
    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    delete crop.expenses[expenseName];
    await crop.save();
    res.status(200).json(crop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
