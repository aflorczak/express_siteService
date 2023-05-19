import express from "express";
import axios from "axios";

const router = express.Router();

router.get('/organizacje', (req, res) => {
    axios.get(`http://localhost:8081/organizations`)
        .then((data) => {
            const organizations = data.data.data;
            res.render('pages/organizationCatalog/home', {
                'organizations': organizations
            });
        })
        .catch((error) => {
            const status = 500;
            const message = error.cause.code || null;
            res.render('errors/other', { status, message });
        })
});

export default router;