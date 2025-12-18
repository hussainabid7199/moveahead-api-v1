export interface EmailRecipient {
  name: string;
  address: string;
}

export interface EmailParams {
  from?: EmailRecipient;
  to?: EmailRecipient[];
  cc?: EmailRecipient[];
  bcc?: EmailRecipient[];
  subject: string;
  textBody?: string;
  htmlBody?: string;
  attachments?: any[];
}