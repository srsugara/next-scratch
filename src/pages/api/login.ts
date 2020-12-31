import { NextApiRequest, NextApiResponse } from "next";
import getConfig from 'next/config'

import sqlite from 'sqlite'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    const db = await sqlite.open('./mydb.sqlite')
    // Only holds serverRuntimeConfig and publicRuntimeConfig
    const { serverRuntimeConfig } = getConfig()

    if (req.method === 'POST') {
        // Store hash in your password DB.
        const person = await db.get('SELECT * FROM person WHERE email = ?', [req.body.email])
        if (!person) {
            res.json({message: 'Email not found'})
            return
        }
        compare(req.body.password, person.password, function(err, result) {
            if (!err && result) {
                const claims = {
                    name: person.name,
                    email: person.email
                }
                const jwt = sign(claims, serverRuntimeConfig.secretKey, {expiresIn: '1h'})
                res.json({token: jwt})
            } else {
                res.json({message: 'Ops, something when wrong'})
            }
        })
    } else {
        res.status(405).json({
            message: 'We only support POST'
        })
    }

    
}