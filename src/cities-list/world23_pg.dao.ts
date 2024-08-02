import pg from 'pg';
const { Pool } = pg; 
const pool = new Pool({
    database: "world23",
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: "1258",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

export async function getCitiesListByState(country:string, state:string) {
    let query = `select * from cities where country_id = ${country} and state_id = ${state} limit 5;`
    const result = await pool.query(query);
    return result.rows;
}

