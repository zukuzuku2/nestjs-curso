import { Controller, Get } from '@nestjs/common';
import { ErrorService } from './error.service';

@Controller('error')
export class ErrorController {
  constructor(private errorService: ErrorService) {}
  @Get()
  getErrorPage() {
    return this.errorService.getErrorPage();
  }
}
