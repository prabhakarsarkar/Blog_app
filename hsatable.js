const knex = require('./connection')

knex.schema.hasTable("signup").then((exist) => {
    if (exist) {
        console.log('table is allready exist');

    } else {
        return knex.schema.createTable("signup", (column) => {
            column.increments('id').primary();
            column.string('name');
            column.string('password');
            column.string("gmail")
        })
    }
}).catch((err) => {
    console.log(err);

})

knex.schema.hasTable("blog").then((exist) => {
    if (exist) {
        console.log('table is allready exist');

    } else {
        return knex.schema.createTable("blog", (column) => {
            column.increments('id').primary();
            column.string('user_name');
            column.string('descripation');
            
        })
    }
}).catch((err) => {
    console.log(err);

})