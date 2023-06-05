import { NextFunction, Request, Response } from 'express';
import config from '../../Config/config';
import { TGenericErrorMessage } from '../../Interfaces/errorInterface';
import handleValidationError from '../../Errors/handleValidationError';
import ApiError from '../../Errors/apiError';
import { error } from 'winston';
import { Error } from 'mongoose';

const globalErrorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: TGenericErrorMessage[] = [];

  if (err?.name === 'ValidatonError') {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.node_env !== 'production' ? err?.stack : undefined,
  });
  next();
};

export default globalErrorHandler;
