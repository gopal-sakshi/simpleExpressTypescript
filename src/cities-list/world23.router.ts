import express, { Request, Response } from 'express';
var router23 = express.Router();
// import { getCitiesListByState } from './world23.handler';
import * as handler from './world23.handler';

router23.get('/countries/:countryId/states/:stateId', async(req:Request, res:Response) => {
    
    let db = typeof req.query.db == 'string' && req.query.db ? req.query.db : 'pg';

    // getCitiesListByState(req.params.countryId, req.params.stateId);     // APPROACH I
    let resp = await handler.getCitiesListByState(req.params.countryId, req.params.stateId, db)       // APPROACH II
    res.send(resp);
});

export default router23;