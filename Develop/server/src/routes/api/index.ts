import { Router } from 'express';
import { ticketRouter } from './ticket-routes.js';

const router = Router();

// Mount the ticket routes under /tickets
router.use('/tickets', ticketRouter);

export default router;
