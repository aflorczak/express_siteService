import express from "express";
import app from "./app.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home', {});
});

export default router;