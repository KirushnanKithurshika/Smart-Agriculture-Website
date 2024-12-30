import mongoose from 'mongoose';

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expenses: { type: Map, of: Number, default: {} },
});

const CropCost = mongoose.model('cropcost', cropSchema);

export default CropCost;
