const pg = require('pg');


const Pool = require('pg').Pool;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});


// const pool = new Pool({
//     user: "bbspwoeqmarcys",
//     password: 'f4605af6bfb1a83bc21f5a277a4e3794c81ca0535ce55e2f5e035cfc03325078',
//     host: 'ec2-176-34-211-0.eu-west-1.compute.amazonaws.com',
//     port: 5432,
//     database: "d1e11aqtbmri63",
// });
// const pool = new Pool({
//     user: "postgres",
//     password: 'root',
//     host: 'localhost',
//     port: 5432,
//     database: "postgres"
// });


module.exports = pool;
