import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { FormType } from '../@types/formType';

@Injectable()
export class FormService {
  constructor(private prisma: PrismaService) {}
  async createForm(data: FormType): Promise<FormType> {
    return this.prisma.form.create({
      data,
    });
  }
}
