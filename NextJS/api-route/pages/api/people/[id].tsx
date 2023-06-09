import { NextApiResponse,NextApiRequest } from "next";
import Data from "../../../data.json"

export default function handler(req:NextApiRequest,res:NextApiResponse){
    const {method,cookies,query} = req;
    const {id} = query;

    if(id ==='redirectMe'){
        //anasayfaya yonlendirme
        res.redirect(307,'/')
    }

    const filtered = Data["photos"].find(p=> `${p.id}` === id)

    console.log({method,cookies,query,secretEnv: process.env.SECRET_TOKEN})

    if(!filtered)
        return res.status(404).json({message:"ID Not Found"})

    return res.status(200).json(filtered)
    
}
    
