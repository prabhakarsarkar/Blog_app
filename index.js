const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const knex = require('./connection')
const table = require('./hsatable')
const router = express.Router()
const bodyParser = require('body-parser')
const middle = require('./middlewere')

// app.use(bodyParser.json)
app.use(express.json())
app.use("/",router)
require('./router/signup')(router,knex)
require('./router/login')(router,knex,jwt)
require('./router/post_blog')(router,knex)
require('./router/get_allblog')(router,knex,middle)
require('./router/user_blog')(router,knex,middle)
require('./router/delete_blog')(router,knex)

app.listen(3010,()=>{
    console.log("port is 3010");
    
})