import express, { Express, Request, Response } from 'express';
import fs from 'fs';
var router23 = express.Router();

/********************************************************************/
import pg from 'pg';
const { Pool } = pg; 
const pool = new Pool({
    database: "world23",
    host: 'localhost',
    // port: '5432',                    // this throws ERROR ---> string isnt assignable to number
    port: 5432,                         // so, in a way, an error is fixed during compile time wonly
    user: 'postgres',
    password: "1258",                   // password = 1258  (number isnt assignable to string)
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});
/********************************************************************/

// WHY we need DAO & stuff ---> https://github.com/beautifulcoder/node-postgres-data-layer
router23.get('/countries/:countryId/states/:stateId', async(req:Request, res:Response) => {
    let country_id = req.params.countryId;
    let state_id = req.params.stateId;
    let query = `select * from cities where country_id = ${country_id} and state_id = ${state_id} limit 5;`
    const result = await pool.query(query);
    res.send(result.rows);
});

router23.get('/replacements23', async(req:Request, res:Response) => {
    // ikkada $1 place lo manam array lo em iste adi fit autundi...
    const result = await pool.query('SELECT $1::text as aatagadu, $2::text as club23', ['vini', 'RMA']);
    res.send({ rows23: result.rows, wholeObj: result});
});

export default router23;