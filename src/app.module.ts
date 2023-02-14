import { Module } from '@nestjs/common';
import { FormModule } from './Form/form.module';
import { PrismaModule, PrismaService } from 'nestjs-prisma';

@Module({
  imports: [FormModule, PrismaModule.forRoot()],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
