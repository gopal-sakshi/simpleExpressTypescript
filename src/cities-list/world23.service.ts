import * as pg_dao from './world23_pg.dao';
import * as mysql_dao from './world23_mysql.dao';

/*
    DAO: Data Access Object
    - isolate the logic (the logic where we interact with db & fetch the data)
    - when db is normalized, new columnds added, migrated, column names changed, stuff changed
    - only modifying/altering this single file will do
    - in the entire application, we ONLY use this 'DAO' file for touching world24 database.
    - we can use either postgres, tomorrow we will use MySQL... 1 week after we use MongoDB
*/

export async function getCitiesListByState(country:string, state:string, useMySQL:boolean = false) {
    if(useMySQL) {
        console.log("using MySQL ============> ");
        return mysql_dao.getCitiesListByState(country, state);
    } else {
        console.log("using postgres ============> ");
        return pg_dao.getCitiesListByState(country, state);
    }
}