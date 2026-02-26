import fs from 'fs';
import path from 'path';
import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

export function setupSwagger(app: Express) {
  const swaggerDir = path.resolve(process.cwd(), 'src/swagger');

  if (!fs.existsSync(swaggerDir)) {
    console.warn('Swagger directory not found:', swaggerDir);
    return;
  }

  const swaggerFiles = fs
    .readdirSync(swaggerDir)
    .filter(file => file.endsWith('.json'))
    .map(file =>
      JSON.parse(fs.readFileSync(path.join(swaggerDir, file), 'utf-8'))
    );

  const paths = swaggerFiles.reduce((acc, file) => {
    return { ...acc, ...(file.paths || {}) };
  }, {} as Record<string, any>);

  const spec = {
    openapi: '3.0.0',
    info: {
      title: 'Move Ahead v1',
      description: 'Move Ahead API',
      website: 'https://moveahead.life',
      staging: 'https://moveahead-staging.life',
      development: 'http://localhost:3001/api',
      version: '1.0.0',
    },

    components: {
      securitySchemes: {
        Auth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        ClientId: {
          type: 'apiKey',
          in: 'header',
          name: 'x-client-id',
        },
      },
    },

    // 👇 Applies to ALL endpoints
    security: [
      {
        bearerAuth: [],
        clientId: [],
      },
    ],

    paths,
  };

  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(spec));
}
