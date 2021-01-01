import { NextApiRequest, NextApiResponse } from "next";

import sqlite from 'sqlite'
import { authenticated } from "../../utils/authenticated";

export default authenticated(async function getPeople(req: NextApiRequest, res: NextApiResponse) {
    const db = await sqlite.open('./mydb.sqlite')
    const people = await db.all('SELECT id, name, email FROM person')
    res.json(people)
})