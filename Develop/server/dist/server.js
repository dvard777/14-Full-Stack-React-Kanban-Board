import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
dotenv.config();
const app = express();
// Middleware to parse JSON requests
app.use(express.json());
// Health check endpoint (useful for Render)
app.get('/health', (req, res) => {
    res.sendStatus(200);
});
// Mount your main routes
app.use(routes);
// Bind to the port provided by Render, or default to 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
