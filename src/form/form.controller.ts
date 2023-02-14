import { Controller, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';
import { FormType } from '../@types/formType';

@Controller()
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async createForm(@Body() formData: FormType): Promise<{ message: string }> {
    this.formService.createForm(formData);
    return {
      message: 'Form created successfully',
    };
  }
}
