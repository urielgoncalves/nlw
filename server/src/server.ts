import express from 'express';
import routes from './routes';

const app = express();

//sending json in the request body
app.use(express.json());
app.use(routes);
app.listen(3333);