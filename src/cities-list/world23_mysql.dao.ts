import mysql from 'mysql2/promise';
var connection:any;

(async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        port: 13306,
        user: 'root',
        password: '1258',
        database: 'world24',
    });
    // IIFE to establish MySQL connection
})();

export async function getCitiesListByState(country:string, state:string) {
    let query = `select * from cities where country_id = ${country} and state_id = ${state} limit 5;`;
    const [results, fields] = await connection.query(query);
    return results;
}