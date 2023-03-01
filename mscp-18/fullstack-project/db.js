const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const client = new Pool({
    user: 'benrichardson',
    host: 'localhost',
    database: 'react_todo',
    password: '',
    port: 5432,

})

module.exports = client;

//connectionString: process.env.DATABASE_URL || Use this for when it is deployed. comment out the local postgresql database information