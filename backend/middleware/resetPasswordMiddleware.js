import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const sendResetPasswordLink = async (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create a reset token
        const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h', 
        });

        // Generate reset link
        const resetLink = `${process.env.FRONTEND_URL}/updatepasswordpage?token=${resetToken}`;

        // Set up the mail transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASSWORD, 
            },
        });

        // Mail options
        const mailOptions = {
            from: `"Smart Agriculture" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Password Reset Request',
            html: `
                <p>Hello ${user.name},</p>
                <p>You requested a password reset. Please click the link below to reset your password:</p>
                <a href="${resetLink}">${resetLink}</a>
                <p>This link will expire in 1 hour.</p>
                <p>If you did not request this, please ignore this email.</p>
                <br>
                <p>Regards,</p>
                <p>Smart Agriculture Team</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log(`Reset Link: ${resetLink}`);

        // Send success response
        res.status(200).json({ message: 'Password reset link sent to your email' });

        next(); 
    } catch (error) {
        console.error('Error sending reset password link:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default sendResetPasswordLink;
