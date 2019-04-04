import express from 'express';
import scraper from "./scrape";
import sitemap from './sitemap';

let routes = express.Router();

routes.get('/',(req, res)=> {res.status(200).json({message:'works'})});
routes.use('/scrape',scraper);
routes.use('/sitemap',sitemap);
export default routes;