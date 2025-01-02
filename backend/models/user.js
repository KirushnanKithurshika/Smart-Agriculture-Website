import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,  // Regular expression for email validation
    },
    password: String,
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
