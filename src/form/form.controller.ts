import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FormService } from './form.service';
import { FormType } from '../@types/formType';

@Controller()
export class FormController {
  constructor(private readonly formService: FormService) {}
  @Post()
  async createForm(
    @Body() formData: FormType,
  ): Promise<{ message: string; status: number }> {
    return this.formService
      .createForm(formData)
      .then(() => {
        return {
          message: 'Form created successfully',
          status: HttpStatus.OK,
        };
      })
      .catch(() => {
        throw new HttpException(
          {
            error: 'Email already exists',
            status: HttpStatus.CONFLICT,
          },
          HttpStatus.CONFLICT,
        );
      });
  }
}
