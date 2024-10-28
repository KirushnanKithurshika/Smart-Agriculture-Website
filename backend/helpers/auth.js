// auth.js
import bcrypt from 'bcrypt';

// Function to hash a password
export const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                return reject(err);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    });
};

// Function to compare passwords
export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};
