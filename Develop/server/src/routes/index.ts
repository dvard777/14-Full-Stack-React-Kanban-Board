import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';

const router = Router();

// Mount the authentication routes at /login
router.use('/login', authRoutes);

// Mount API routes under /api
router.use('/api', apiRoutes);

export default router;
