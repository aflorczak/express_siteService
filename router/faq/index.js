import express from "express";

const router = express.Router();

router.get('/faq', (req, res) => {
    res.render('pages/faq/home', {});
});

export default router;