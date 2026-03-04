import { injectable } from 'inversify';
import config from '../config';
import container from '../config/ioc.config';
import { TYPES } from '../config/ioc.types';
import UnitOfService from '../services/unitof.service';
import enquiryEmailTemplate from '../template/enquiry.email.template';
import { EnquiryModel } from '../validators/enquiry.validator';
import { Request, Response } from 'express';
import CustomResponse from '../dtos/custom-response';
import enquiryConfirmationEmailTemplate from '../template/enquiry.email.confirmation.template';
import CustomError from '../exceptions/custom-error';

export class EnquiryController {
  constructor(private unitOfService = container.get<UnitOfService>(TYPES.UnitOfService)) {
    this.unitOfService = unitOfService;
  }

  enquiry = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { fullName, email, phone, service, message }: EnquiryModel = req.body;

      const enquiry = await this.unitOfService.Email.send({
        from: {
          name: config.app.name,
          address: config.email.fromEmail,
        },
        to: [
          {
            name: config.app.name,
            address: config.email.toEmail,
          },
        ],
        bcc: [
          {
            name: 'Support',
            address: config.email.trackingEmail,
          },
        ],
        subject: `New Enquiry from ${fullName} for ${service}`,
        textBody: `You have received a new enquiry.\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService: ${service}\nMessage: ${
          message || 'N/A'
        }`,
        htmlBody: enquiryEmailTemplate(config.app.name, fullName, email, phone || 'N/A', service, message || 'N/A'),
      });

      if (!enquiry) {
        throw new CustomError('Failed to send enquiry email', 500, { message: 'Failed to send enquiry email' });
      }

      // Send confirmation email to user
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
        bcc: [
          {
            name: 'Support',
            address: config.email.trackingEmail,
          },
        ],
        subject: `Confirmation: We Received Your Enquiry for ${service}`,
        htmlBody: enquiryConfirmationEmailTemplate(config.app.name, fullName, service),
      });

      const response = new CustomResponse('Email sent successfully', 201);
      return res.status(201).json(response);
    } catch (err) {
      console.error('Error sending email:', err);
      throw new CustomError('Failed to send email', 500, { message: 'Failed to send email', error: err });
    }
  };
}
