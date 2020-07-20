module.exports = (router,knex,middle)=>{
    router.get("/user_blog/:id",middle,(req,res)=>{
        knex('blog').where("id",req.params.id).then((data)=>{
            res.send(data)
        }).catch((err)=>{
            console.log(err);
            
        })
    })
}