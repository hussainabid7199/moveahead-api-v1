import { injectable } from 'inversify';
import config from '../config';
import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import UnitOfService from '../services/unitof.service';
import enquiryEmailTemplate from '../template/enquiry.email.template';
import { EnquiryModel } from '../validators/enquiry.validator';
import { Request, Response } from 'express';

export class EnquiryController {
  constructor(private unitOfService = container.get<UnitOfService>(TYPES.UnitOfService)) {
    this.unitOfService = unitOfService;
  }

  enquiry = async (req: Request, res: Response): Promise<Response> => {
    const { fullName, email, phone, service, message }: EnquiryModel = req.body;
    
    await this.unitOfService.Email.send({
      from: {
        name: config.app.name,
        address: config.email.fromEmail,
      },
      to: [
        {
          name: fullName,
          address: email,
        },
      ],
      subject: `New Enquiry from ${fullName} for ${service}`,
      textBody: `You have received a new enquiry.\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService: ${service}\nMessage: ${
        message || 'N/A'
      }`,
      htmlBody: enquiryEmailTemplate(config.app.name, fullName, email, phone || 'N/A', service, message || 'N/A'),
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  };
}
