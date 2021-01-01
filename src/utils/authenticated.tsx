import { verify } from "jsonwebtoken"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import getConfig from 'next/config'

export const authenticated = (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    const { serverRuntimeConfig } = getConfig()
    // verify(req.headers.authorization!, serverRuntimeConfig.secretKey, async function (err: any, decoded: any) {
    //     if (!err && decoded) {
    //         return await fn(req, res)
    //     }
    //     res.status(401).json({message: 'Unauthenticated'})
    // })

    // using cookie
    verify(req.cookies.auth!, serverRuntimeConfig.secretKey, async function (err: any, decoded: any) {
        if (!err && decoded) {
            return await fn(req, res)
        }
        console.log(req.cookies.auth)
        res.status(401).json({message: 'Unauthenticated', cookie: req.cookies.auth, decoded: decoded})
    })

}