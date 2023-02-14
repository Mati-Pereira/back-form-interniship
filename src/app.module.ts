import { Module } from '@nestjs/common';
import { PrismaService } from './Prisma/prisma.service';
import { FormModule } from './Form/form.module';
import { PrismaModule } from './Prisma/prisma.module';

@Module({
  imports: [FormModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
