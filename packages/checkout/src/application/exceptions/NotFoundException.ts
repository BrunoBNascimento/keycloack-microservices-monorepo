import httpCodes from './enum/http-codes';
import CustomException from './CustomException';

export default class NotFoundException extends CustomException {
  constructor(message: string) {
    super(message, httpCodes.NOT_FOUND);
  }
}
