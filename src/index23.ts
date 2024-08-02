import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

var blah = dotenv.config();

const PORT = process.env.PORT || 3011;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*******************************************************************************************/
import file23 from './routes11/file23';
app.use('/fileRouter', file23);

import db23 from './routes11/db23';
app.use('/db23', db23);

import cities23 from './cities-list/world23.router';
app.use('/dao-uses', cities23);

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello world23!!!!!!!!!</h1>');
});


/*******************************************************************************************/
var server23 = app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`))
server23.on('error', onError23).on('SIGINT', () => {server23.close(() => { console.log('closedDD'); })});

function onError23(error: NodeJS.ErrnoException) {
    if (error.syscall !== 'listen') { throw error; }
    switch (error.code) {
        case 'EACCES': console.error(' requires elevated privileges23'); process.exit(1); break;
        case 'EADDRINUSE': console.error('address23 is already in use'); process.exit(1); break;
        default: process.exit(1);
    }
}
/**********************************************************************************************/