import { Controller, Get } from '@nestjs/common';
import { NotFoundService } from './notFound.service';

@Controller('notFound')
export class NotFoundController {
  constructor(private notfoundService: NotFoundService) {}
  @Get()
  getPageNotFound() {
    return this.notfoundService.getPageNotFound();
  }
}
