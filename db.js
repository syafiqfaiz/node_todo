
const pg = require('pg')
const { Client } = pg
 
const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'todo-node',
  user: 'faiz',
  password: 'abcd1234',
})

const connect = async ()=>{
  await client.connect()
  // const result = await client.query('SELECT * from todos')
  // console.log(result)
}

connect()

module.exports = client
