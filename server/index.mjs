import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import {port} from './config';
import routes from "./router";
import {baseHeader} from "./middleware/header";
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(baseHeader);
app.use('/api/v1', routes);
app.listen(port,() => {
    console.log(`server is running on ${port} `)
});


