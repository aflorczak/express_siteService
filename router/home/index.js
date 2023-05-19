import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home/home', {});
});

export default router;