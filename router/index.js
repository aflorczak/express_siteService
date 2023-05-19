import express from "express";
import organization from "./organization/index.js";
import home from "./home/index.js";
import organizationCatalog from "./organizationCatalog/index.js";
import faq from "./faq/index.js";
import contact from "./contact/index.js";
import blog from "./blog/index.js";

const router = express.Router();

router.use(blog);
router.use(contact);
router.use(faq);
router.use(organizationCatalog);
router.use(organization);
router.use(home);

export default router;