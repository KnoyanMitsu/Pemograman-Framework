import { NextApiRequest, NextApiResponse } from "next";
import { revalidateTag } from "next/cache";

type Data = {
    revalidated: boolean;
    message?: string;
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    if (req.query.token !== process.env.REVALIDATE_TOKEN){
        return res.status(401).json({revalidated: false,message: "Invalid correnct token. (Wrong Get??)"})
    }

    if (req.query.data === "produk") {
        try{
            await res.revalidate('/produk/static')
            return res.json({ revalidated: true })
        }catch(err){
            console.log("Error in API:",err)
            return res.status(500).send({revalidated: false})
        }
    }
  
    return res.json({
        revalidated: false,
        message: "Invalid data parameter. Expected 'data=produk'."
    })
}