import { HttpCode, Injectable } from '@nestjs/common';

@Injectable()
export class NotFoundService {
  @HttpCode(404)
  getPageNotFound() {
    return '404 Page Not Found';
  }
}
