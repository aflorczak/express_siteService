import express from "express";

const router = express.Router();

router.get('/blog', (req, res) => {
    res.render('pages/blog/home', {});
});

export default router;