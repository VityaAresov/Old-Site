import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailService } from './email.service';
import { SendContactDto } from './dto/send-contact.dto';

@Controller('email')
export class EmailController {
  constructor(
    private readonly emailService: EmailService,
    private readonly configService: ConfigService,
  ) {}

  @Post('send-contact')
  async sendContact(@Body() sendContactDto: SendContactDto) {
    const to = this.configService.get<string>('SENDGRID_FROM');
    const templateId = this.configService.get<string>(
      'SENDGRID_CONTACT_TEMPLATE_ID',
    );
    const data = {
      fullName: sendContactDto.fullName,
      emailAddress: sendContactDto.email,
      phone: sendContactDto.phone,
      message: sendContactDto.message,
    };

    return await this.emailService.send(to, templateId, data);
  }
}
