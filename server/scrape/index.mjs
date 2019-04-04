import express from 'express';
import {scrape} from "./controller";
let router = express.Router();

router.post('', scrape);

export default router;