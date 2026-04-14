import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import routes from './routes/index.routes';
import ClientIdMiddleware from './middlewares/clientid.middleware';
import asyncHandler from './middlewares/asyncHandler.middleware';
import errorHandler from './middlewares/errorHandler.middleware';
import compression from "compression";
import helmet from "helmet";
import RateLimiter from './security/ratelimiting/rateLimiting';
import { corsMiddleware } from './security/cors';
import { setupSwagger } from './utils/common/swagger';
import hpp from "hpp";
import RequestMiddleware from './security/request';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;



app.set("trust proxy", 2);
app.use(RequestMiddleware())
app.use(helmet({crossOriginResourcePolicy: { policy: "cross-origin" }}));
app.use(corsMiddleware);
app.use(RateLimiter());
app.use(hpp());

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public/home/index.html'));
});
//setup public directory
app.use(asyncHandler(ClientIdMiddleware.verify));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(bodyParser.json({ limit: "1mb", strict: true }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Payload Compression
app.use(compression({ level: 6, threshold: 1024, memLevel: 8 }));


app.use("/api",routes);
setupSwagger(app);
// Error-handling middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
