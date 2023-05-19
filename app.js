import express from 'express';
import { engine } from 'express-handlebars';
import { notFound, catchError } from './middlewares/error.js';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('pages/home', {});
});

app.use(notFound);
app.use(catchError);

// app.use((req, res, next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next();
// });

// const renderErrorPage = (err, req, res) => {
//     res.status(err.status);
//     res.render('errors/other.handlebars', {
//         'status': err.status,
//         'message': err.message
//     });
// }

// app.use((req, res, next) => {
//     const err = new Error('Page Not Found');
//     err.status = 404;
//     next(err);
// });

// app.use((err, req, res, next) => {
//     renderErrorPage(err, req, res);
//     next();
// });

export default app;
