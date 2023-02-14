import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { FormModule } from './Form/form.module';

@Module({
  imports: [FormModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
