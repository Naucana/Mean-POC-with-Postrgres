const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: '192.168.242.251',
    database: 'aedas',
    password: 'postgres',
    port: 5432,
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}