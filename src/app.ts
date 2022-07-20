import express, { json } from 'express';
import cors from 'cors';
import router from './routes/index.js';
import errorHandlerMd from './middlewares/error/errorHandlerMd.js';

const app = express();

app.use(cors());
app.use(json());

app.use(router);

app.use(errorHandlerMd);

export default app;