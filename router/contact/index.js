import express from "express";

const router = express.Router();

router.get('/kontakt', (req, res) => {
    res.render('pages/contact/home', {});
});

export default router;