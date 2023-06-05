import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './Modules/UserModule/user.route';
import globalErrorHandler from './Middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1/users', userRouter);

// error class

// error test
// app.get('/err', (req: Request, res: Response, next:NextFunction) => {
//   // throw new ApiError(400, 'you got an error');
//   next('you got an error, meaw..!');
// });

// global error handler
app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('University Management Server Is Running...!');
});

export default app;
