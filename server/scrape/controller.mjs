import cheerio from 'cheerio';
import {fetchUrl} from "./service";
import isEmpty from "lodash/isEmpty";


export const scrape = async(req,res) => {
    if(!req.body.url || !req.body.query){
        return res.status(500).json({message:'No url specified'});
    }
    try {
        let urlMap = await buildLinkMap(req.body.url);
        console.log(urlMap);
        return res.json(urlMap);
    }catch(err){
        return res.status(500).json({message:err});
    }
};


async function buildLinkMap(url) {
    let urlMap = new Map();
    try {
        const resp = await fetchUrl(url);
        const $ = cheerio.load(resp.data);
        const links = $('a[href]').toArray();
        if (isEmpty(links)) return;
        let childMap = new Map();
        for(let link of links){
            let childUrl = `${url}${$(link).attr('href')}`;
            console.log(childUrl);
            if(childMap.has(childUrl)) continue;
            childMap.set(childUrl, buildLinkMap(childUrl))
        }
        urlMap.set(url, childMap);
        return urlMap;
    }catch(err){
        console.log(err);
        return urlMap;
    }
}