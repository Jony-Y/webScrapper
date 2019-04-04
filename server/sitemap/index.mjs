import express from 'express';
import {generateSitemap} from "./controller";
let router = express.Router();

router.get('', generateSitemap);

export default router;