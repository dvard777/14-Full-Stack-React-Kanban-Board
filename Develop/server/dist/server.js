import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
dotenv.config();
const app = express();
// Parse JSON request bodies
app.use(express.json());
// Use the main router
app.use(routes);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
