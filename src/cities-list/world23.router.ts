import express, { Request, Response } from 'express';
var router23 = express.Router();
// import { getCitiesListByState } from './world23.handler';
import * as handler from './world23.handler';

router23.get('/countries/:countryId/states/:stateId', async(req:Request, res:Response) => {
    
    // getCitiesListByState(req.params.countryId, req.params.stateId);     // APPROACH I
    let resp = await handler.getCitiesListByState(req.params.countryId, req.params.stateId)       // APPROACH II
    res.send(resp);
});

export default router23;