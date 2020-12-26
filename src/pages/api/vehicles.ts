import { NextApiRequest, NextApiResponse } from "next";

export default function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.json({
            message: 'Sorry we only accept GET requests'
        })
    }
    res.json({
        message: 'hello',
        method: req.method
    })
}