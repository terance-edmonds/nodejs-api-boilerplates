import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import checkCorsOrigin from './cors';
import routes from './src/routes';
import { port } from './config';

const app = express();

// cors
app.use(
    cors({
        origin: (origin, callback) => checkCorsOrigin(origin, callback),
        credentials: true
    })
);

// cookie parser
app.use(cookieParser());

// setup routes
app.use(routes);

app.listen(port, () => {
    console.log('server listing at port: ', port);
});
