import { injectable } from 'inversify';
import * as nodemailer from 'nodemailer';
import config from '../config';
import Mail from 'nodemailer/lib/mailer';
import { EmailParams } from '../params/email.params';
import * as winston from 'winston'; // Assuming winston is installed

@injectable()
export class EmailService {
  private readonly siteMode: string;
  private readonly appName: string;
  private readonly fromEmail: string;
  private readonly logger: winston.Logger;

  constructor() {
    this.siteMode = config.app.mode;
    this.fromEmail = config.email.fromEmail;
    this.appName = config.app.name;
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
      ),
      transports: [
        new winston.transports.Console(),
      ],
    });
  }

  async send(params: EmailParams): Promise<boolean> {
    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        const transporter = nodemailer.createTransport({
          host: config.smtp.host,
          port: config.smtp.port,
          secure: config.smtp.port === 465,
          requireTLS: config.smtp.port === 587,
          auth: {
            user: config.smtp.username,
            pass: config.smtp.password,
          },
          // Production robustness
          connectionTimeout: 60000, // 60 seconds
          greetingTimeout: 30000,   // 30 seconds
          socketTimeout: 60000,     // 60 seconds
          // Connection pooling for better performance
          pool: true,
          maxConnections: 5,
          maxMessages: 100,
          tls: {
            rejectUnauthorized: this.siteMode === 'production', // Strict in production
          },
          logger: this.siteMode !== 'production',
          debug: this.siteMode !== 'production',
        });

        const mailOptions: Mail.Options = {
          from: params.from ? params.from : { name: this.appName, address: this.fromEmail },
          to: params.to
            ? params.to.map((e: { name: string; address: string }) => {
                return {
                  name: e.name,
                  address: e.address,
                };
              })
            : [{ name: this.appName, address: this.fromEmail }],
          cc:
            params.cc &&
            params.cc.map((e: { name: string; address: string }) => {
              return {
                name: e.name,
                address: e.address,
              };
            }),
          bcc:
            params.bcc &&
            params.bcc.map((e: { name: string; address: string }) => {
              return {
                name: e.name,
                address: e.address,
              };
            }),
          subject: params.subject,
          text: params.textBody,
          html: params.htmlBody,
          attachments: params.attachments, //Reference: https://nodemailer.com/message/attachments/
        };

        if (this.siteMode === 'local') {
          // reset the to, cc, and bcc fields to the developer email
          mailOptions.to = [{ name: this.appName, address: config.email.developerEmail }];
          mailOptions.cc = [];
          mailOptions.bcc = [];
        }

        await transporter.sendMail(mailOptions);
        transporter.close(); // Close the transporter
        return true;
      } catch (err: any) {
        attempt++;
        this.logger.error(`Error sending email (attempt ${attempt}/${maxRetries}):`, err);

        // Check if it's a transient error worth retrying
        const isRetryable = err.code === 'ETIMEDOUT' || err.code === 'ECONNRESET' || err.code === 'ENOTFOUND';
        if (!isRetryable || attempt >= maxRetries) {
          return false;
        }

        // Wait before retrying (exponential backoff)
        const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    return false;
  }
}
