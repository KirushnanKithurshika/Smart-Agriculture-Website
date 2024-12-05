import mongoose from 'mongoose';

const CropTaskSchema = new mongoose.Schema({
    taskName: { type: String, required: true },
    assignedTo: { type: String, required: true },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],  // Example valid statuses
        required: true,
    },
    deadline: { type: Date, required: true },
});


const CropTask = mongoose.model('CropTask',CropTaskSchema);

export default CropTask;
