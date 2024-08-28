import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRouter from './routes/authRoutes';
import studentRouter from './routes/studentRoutes';
import graduationRouter from './routes/graduationRoutes';
import professorRouter from './routes/professorRoutes';
import modalityRouter from './routes/modalityRoutes';
import adminRouter from './routes/adminRoutes';
import statsRouter from './routes/statsRoutes';
import emailRouter from './routes/emailRoutes';
import permissionRouter from './routes/permissionRouters'

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.use('/api/auth', authRouter);
app.use('/api/student', studentRouter);
app.use('/api/graduation', graduationRouter);
app.use('/api/professor', professorRouter);
app.use('/api/admin', adminRouter);
app.use('/api/modality', modalityRouter);
app.use('/api/stats', statsRouter);
app.use('/api/email', emailRouter);
app.use('/api/permission', permissionRouter);

export default app;
