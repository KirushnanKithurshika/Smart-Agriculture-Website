import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  job: { type: String, required: true },
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
