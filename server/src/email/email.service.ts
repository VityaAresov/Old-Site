import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailDataRequired, default as SendGrid } from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor(private readonly configService: ConfigService) {
    SendGrid.setApiKey(this.configService.get<string>('SENDGRID_API_KEY'));
  }

  async send(
    to: string,
    templateId: string,
    dynamicTemplateData?: { [key: string]: any },
  ) {
    try {
      const mail: MailDataRequired = {
        to,
        from: this.configService.get<string>('SENDGRID_FROM'),
        templateId,
        dynamicTemplateData,
      };
      return await SendGrid.send(mail);
    } catch (error) {
      throw new ServiceUnavailableException(error);
    }
  }
}
