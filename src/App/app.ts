import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './Modules/UsersModule/users.route';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1/users', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('University Management Server Is Running...!');
});

export default app;
