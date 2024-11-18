
import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  time: { type: Date, required: true },
  PH: { type: Number, required: true },
  moistureContent: { type: Number, required: true },
  K: { type: Number, required: true },
  N: { type: Number, required: true },
  P: { type: Number, required: true },
});

const Log = mongoose.model('Log', logSchema);
export default Log;
