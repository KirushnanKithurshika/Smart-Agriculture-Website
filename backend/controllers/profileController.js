import User from '../models/user.js';
import fs from 'fs';
import path from 'path';


export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      name: user.name,
      email: user.email,
      contactNumber: user.contactNumber,
      address: user.address,
      jobDescription: user.jobDescription,
      profilePicture: user.profilePicture, 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, contactNumber, address, jobDescription } = req.body;
    const file = req.file; 

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    user.name = name || user.name;
    user.contactNumber = contactNumber || user.contactNumber;
    user.address = address || user.address;
    user.jobDescription = jobDescription || user.jobDescription;

   
    if (file) {
      const newFilePath = path.join('uploads', file.filename);

     
      if (user.profilePicture) {
        const oldFilePath = path.join('uploads', path.basename(user.profilePicture));
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }

      user.profilePicture = newFilePath;
    }

    await user.save();

    res.status(200).json({ message: 'Profile updated successfully', profilePicture: user.profilePicture });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
