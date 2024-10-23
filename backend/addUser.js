import mongoose from 'mongoose';
import User from './models/user.js'; // Adjust the path as necessary
import connectDB from './configuration/Userdb.js'; // Adjust the path as necessary

const addUser = async () => {
    await connectDB(); // Ensure you're connected to the database

    const user = new User({
        username: 'exampleUser',  // Replace with desired username
        password: 'examplePassword', // Replace with desired password
    });

    try {
        await user.save();
        console.log('User added successfully');
    } catch (error) {
        console.error('Error adding user:', error);
    } finally {
        mongoose.connection.close(); // Close the connection after the operation
    }
};

addUser();
