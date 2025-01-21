import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    password: String,
    address: String,
    contactNumber: String,
    jobDescription: String,
    profilePicture: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'GridFS'
    },
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
