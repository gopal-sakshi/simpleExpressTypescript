import { MongoClient } from 'mongodb';
const client = new MongoClient('mongodb://localhost:27017');
const world23 = client.db('world23');
const citiesColl23 = world23.collection('cities23');

export async function getCitiesListByState(country:string, state:string) {
    let results = await citiesColl23.find({
        "id": Number(country)
    }).toArray();
    let reqState =  results[0].states.find((stateElem:any) => {        
        return stateElem.id == Number(state);
    });
    return reqState.cities.slice(0,5)
}