import express, { Express, Request, Response } from 'express';
import fs from 'fs';
var router23 = express.Router();

router23.get('/readFile', async(req:Request, res:Response) => {
    console.error(req.path);
    fs.readFile('readMe/file_input1.txt', (err, data) => {
        if(data) res.send(data);
        else { console.log(err); res.send('phatTtu');} 
    })
});

export default router23;