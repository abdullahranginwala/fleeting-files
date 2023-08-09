import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/auth';
import mongoose, {ConnectOptions} from 'mongoose';

dotenv.config();

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI as string);

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});