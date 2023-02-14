import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { PrismaService } from 'nestjs-prisma';

@Module({
  imports: [],
  controllers: [FormController],
  providers: [FormService, PrismaService],
})
export class FormModule {}
