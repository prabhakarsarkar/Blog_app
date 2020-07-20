const knex = require("knex")({
    client:"mysql",
    connection:{
        host:'localhost',
        user:'root',
        password:'sarkar123',
        database:'blogApp'
    }
})

module.exports = knex;