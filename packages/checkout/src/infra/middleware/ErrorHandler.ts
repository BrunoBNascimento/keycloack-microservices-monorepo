import { NextFunction, Request } from 'express';
import CustomResponse from './interfaces/CustomResponse';
import CustomException from '../../application/exceptions/CustomException';
import CustomValidationException from '../../application/exceptions/CustomValidationException';

export default (
  req: Request,
  res: CustomResponse,
  next: NextFunction,
): void => {
  const handleHttpError = (
    error: CustomValidationException | CustomException,
  ) => {
    const { code = 500, message, details } = error;

    res.status(code).send({ error: true, message, details });
  };

  res.handleHttpError = handleHttpError;

  next();
};
