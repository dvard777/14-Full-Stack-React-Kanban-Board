import { Router } from 'express';
import { User } from '../models/index.js'; // Initialized user model from models/index.ts
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = async (req, res) => {
    console.log('Login attempt with data:', req.body);
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            console.log(`User not found: ${username}`);
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }
        console.log(`User found: ${user.username}`);
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            console.log(`Password mismatch for user: ${username}`);
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }
        const payload = { username: user.username, id: user.id };
        // Use JWT_SECRET from your .env file (not JWT_SECRET_KEY)
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT secret is not defined in environment variables');
        }
        console.log('Using JWT secret:', secret.substring(0, 10) + '...');
        const token = jwt.sign(payload, secret, { expiresIn: '1h' });
        console.log('Token generated successfully');
        res.json({ token });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
const router = Router();
router.post('/', login);
export default router;
