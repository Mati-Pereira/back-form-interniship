import { Module } from '@nestjs/common';
import { FormModule } from './Form/form.module';

@Module({
  imports: [FormModule],
})
export class AppModule {}
