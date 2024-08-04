import * as service from './world23.service';

export async function getCitiesListByState(countryId:string, stateId:string, db:string = 'pg') {
    if(typeof countryId != 'string' || typeof stateId != 'string') {
        throw new Error('string kavali babai')
    } else {
        return service.getCitiesListByState(countryId, stateId, db);
    }
}

