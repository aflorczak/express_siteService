import express from "express";

const router = express.Router();

router.get('/:organization', (req, res) => {
    // if is render else redirect 404
    res.render('pages/organization/home', {});
});

export default router;