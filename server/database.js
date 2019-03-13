const Pool = require('pg').Pool
const pool = new Pool({
    user: 'username',
    host: 'host',
    database: 'database',
    password: 'password',
    port: port,
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}