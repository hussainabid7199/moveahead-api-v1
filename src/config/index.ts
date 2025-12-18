import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const config = {
  app: {
    name: process.env.APP_NAME || 'MyApp',
    mode: process.env.APP_MODE || 'development',
  },
  jwt: {
    secret: process.env.JWT_SECRET || '',
    audience: process.env.JWT_AUDIENCE || '',
    issuer: process.env.JWT_ISSUER || '',
  },
  smtp: {
    host: process.env.SMTP_HOST || '',
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
    secure: process.env.SMTP_SECURE === 'true',
    username: process.env.SMTP_USERNAME || '',
    password: process.env.SMTP_PASSWORD || '',
    ciphers: process.env.SMTP_CIPHERS || 'SSLv3',
  },
  email: {
    fromEmail: process.env.EMAIL_FROM || '',
    developerEmail: process.env.DEVELOPER_EMAIL || '',
  },

};

export default config;
