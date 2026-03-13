import type { NextApiRequest, NextApiResponse } from "next";
import retrieveData from "../utils/db/servicesfirebase";


type Data = {
    status: boolean;
    status_code: number;
    data: any;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const data = await retrieveData("products");
    res.status(200).json({
        status: true,
        status_code: 200,
        data: data
    })
}