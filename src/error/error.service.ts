import { HttpCode, Injectable } from '@nestjs/common';

@Injectable()
export class ErrorService {
  @HttpCode(500)
  getErrorPage() {
    return ' Error Route';
  }
}
