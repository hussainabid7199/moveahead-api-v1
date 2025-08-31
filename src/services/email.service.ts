// import { injectable } from 'inversify';
// import { EmailParams } from '../params/email.params';
// import * as nodemailer from 'nodemailer';
// import config from '../config';
// import Mail from 'nodemailer/lib/mailer';

// @injectable()
// export class EmailService {
//   private readonly siteMode: string;
//   private readonly appName: string;
//   private readonly fromEmail: string;
//   constructor() {
//     this.siteMode = config.app.mode;
//     this.fromEmail = config.email.fromEmail;
//     this.appName = config.app.name;
//   }

//   async send(params: EmailParams): Promise<boolean> {
//     try {
//       // Create a Nodemailer transporter using SMTP
//       // Reference: https://nodemailer.com/smtp/
//       const transporter = nodemailer.createTransport({
//         host: config.smtp.host,
//         port: config.smtp.port,
//         secure: config.smtp.port === 465, // true for 465, false for other ports
//         auth: {
//           user: config.smtp.username,
//           pass: config.smtp.password,
//         },
//       });

//       // Define email options
//       //https://nodemailer.com/message/

//       const mailOptions: Mail.Options = {
//         from: params.from ? params.from : { name: this.appName, address: this.fromEmail },
//         to: params.to
//           ? params.to.map((e) => {
//               return {
//                 name: e.name,
//                 address: e.address,
//               };
//             })
//           : [{ name: this.appName, address: this.fromEmail }],
//         cc:
//           params.cc &&
//           params.cc.map((e) => {
//             return {
//               name: e.name,
//               address: e.address,
//             };
//           }),
//         bcc:
//           params.bcc &&
//           params.bcc.map((e) => {
//             return {
//               name: e.name,
//               address: e.address,
//             };
//           }),
//         subject: params.subject,
//         text: params.textBody,
//         html: params.htmlBody,
//         attachments: params.attachments, //Reference: https://nodemailer.com/message/attachments/
//       };

//       if (this.siteMode === 'local') {
//         // reset the to, cc, and bcc fields to the developer email
//         mailOptions.to = [{ name: this.appName, address: config.email.developerEmail }];
//         mailOptions.cc = [];
//         mailOptions.bcc = [];
//       }

//       await transporter.sendMail(mailOptions);

//       return true;
//     } catch (err) {
//       console.error('Error sending email:', err);
//       return false;
//     }
//   }
// }
