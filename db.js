
const pg = require('pg')
const { Client } = pg
 
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
})

const connect = async ()=>{
  await client.connect()
  // const result = await client.query('SELECT * from todos')
  // console.log(result)
}

connect()

module.exports = client
