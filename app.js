import express from 'express';
import { engine } from 'express-handlebars';
import { notFound, catchError } from './middlewares/error.js';
import router from "./router/index.js";

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(router);

app.use(notFound);
app.use(catchError);

export default app;
