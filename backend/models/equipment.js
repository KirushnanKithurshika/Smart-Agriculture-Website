import mongoose from 'mongoose';

const equipmentSchema = new mongoose.Schema({
  equipmentId: { type: String, required: true, unique: true },
  equipmentName: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  purchaseDate: { type: Date, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  quantity: { type: Number, required: true },
  assignedTo: { type: String, required: false },

});

const Equipment = mongoose.model('Equipment', equipmentSchema);

export default Equipment; 
