import express from "express";
import axios from "axios";

const router = express.Router();

router.get('/faq', (req, res) => {
    axios.get(`http://localhost:8081/faq`)
        .then((data) => {
            const faqs = data.data.data;
            res.render('pages/faq/home', {
                'faqs': faqs
            });
        })
        .catch((error) => {
            const status = 500;
            const message = error.cause.code || null;
            res.render('errors/other', { status, message });
        })
});

export default router;