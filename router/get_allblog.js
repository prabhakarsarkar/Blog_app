module.exports = (router,knex,middle)=>{
    router.get("/all_blog",middle,(req,res)=>{
        knex.select("*").from('blog').then((data)=>{
            res.send(data)
        })
    })
}