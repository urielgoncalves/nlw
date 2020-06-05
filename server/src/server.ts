import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

//sending json in the request body
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')));
app.listen(3333);