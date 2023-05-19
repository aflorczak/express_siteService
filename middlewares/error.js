export const notFound = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}

export const catchError = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message;

    res.status(status);

    if (status === 404) {
        res.render('errors/notFound.handlebars', { status, message });
    } else {
        res.render('errors/other.handlebars', { status, message });
    }
}