import fs from 'fs';
import path from 'path';
import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

export function setupSwagger(app: Express) {
  const possibleDirs = [
    path.resolve(process.cwd(), 'src/swagger'),   // dev
    path.resolve(process.cwd(), 'dist/swagger'),  // docker/prod
  ];

  const swaggerDir = possibleDirs.find(dir => fs.existsSync(dir));

  if (!swaggerDir) {
    console.warn('Swagger directory not found:', possibleDirs);
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

  const schemas = swaggerFiles.reduce((acc, file) => {
    return { ...acc, ...(file.components?.schemas || {}) };
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
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        clientId: {
          type: 'apiKey',
          in: 'header',
          name: 'x-client-id',
        },
      },
      schemas,
    },
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