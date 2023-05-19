import express from "express";

const router = express.Router();

router.get('/organizacje', (req, res) => {
    res.render('pages/organizationCatalog/home', {});
});

export default router;