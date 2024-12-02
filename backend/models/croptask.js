import mongoose from 'mongoose';

const CropTaskSchema =new mongoose.Schema({
    taskName: {
        type:String,
        required:true,
    },
    assignedTo:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['Pending','In progress','Completed'],
        defult:'Pending',
    },
    deadline:{
        type:Date,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

const CropTask = mongoose.model('CropTask',CropTaskSchema);

export default CropTask;
