import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { FormService } from './form.service';
import { FormType } from '../@types/formType';

@Controller()
export class FormController {
  constructor(private readonly formService: FormService) {}
  @Post()
  async createForm(@Body() formData: FormType): Promise<FormType> {
    try {
      return await this.formService.createForm(formData);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'The email is already in use by another user',
        },
        HttpStatus.CONFLICT,
        {
          cause: error,
        },
      );
    }
  }
  @Get()
  async hello() {
    return {
      message: 'The Back is Working',
    };
  }
}
