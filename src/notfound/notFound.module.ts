import { NotFoundService } from './notFound.service';
import { NotFoundController } from './notFound.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [NotFoundController],
  providers: [NotFoundService],
})
export class NotFoundModule {}
