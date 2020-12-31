import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import getConfig from 'next/config'

import sqlite from 'sqlite'
import { verify } from 'jsonwebtoken'

export const authenticated = (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    const { serverRuntimeConfig } = getConfig()
    verify(req.headers.authorization!, serverRuntimeConfig.secretKey, async function (err: any, decoded: any) {
        if (!err && decoded) {
            return await fn(req, res)
        }
        res.status(401).json({message: 'Unauthenticated'})
    })
}

export default authenticated(async function getPeople(req: NextApiRequest, res: NextApiResponse) {
    const db = await sqlite.open('./mydb.sqlite')
    const people = await db.all('SELECT id, name, email FROM person')
    res.json(people)
})