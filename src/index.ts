import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
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
import { CorsOptions } from './security/cors';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.set("trust proxy", 1);
app.use(helmet());
app.use(cors(CorsOptions.corsOptions()));
app.use(RateLimiter());
//setup public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: "1mb", strict: true }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Payload Compression
app.use(compression({ level: 6, threshold: 1024, memLevel: 8 }));

//route setup
app.get('/', (req, res) => {  
  res.send('Welcome to Move Ahead!');
});

app.use(asyncHandler(ClientIdMiddleware.verify));

app.use('/api', routes);

// Error-handling middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
