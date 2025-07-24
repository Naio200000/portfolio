import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import dataRouter from './routes/dataRouter.js';
import { connectDB } from './config/db_cvdata.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(cors({
    origin: 'http://localhost:5173', // Change this to your frontend URL
  }));
}

app.use('/cv', dataRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../proyecto-portfolio/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../proyecto-portfolio','dist','index.html'));
  });
}


app.listen(PORT, () => {
  connectDB().then(() => {
    console.log(`Server is running on port ${PORT} and Connected to MongoDB`);
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });
});