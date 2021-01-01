import { NextApiRequest, NextApiResponse } from "next";
import sqlite from 'sqlite'
import { authenticated } from "../../utils/authenticated";

export default authenticated(async function getVehicles(req: NextApiRequest, res: NextApiResponse) {
    const db = await sqlite.open('./mydb.sqlite')
    const vehicles = await db.all('SELECT * FROM vehicle')
    res.json(vehicles)
})