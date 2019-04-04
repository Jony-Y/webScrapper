import {createSitemap} from "./service";

export const generateSitemap = async(req,res) => {
    try {
        const sm = await createSitemap();
        console.log(sm);
        sm.toXML( function (err, xml) {
            if (err) {
                return res.status(500).end();
            }
            console.log(xml);
            return res.send(xml);

        });
    }catch(err){
        return res.status(500).json({message:err});
    }
};