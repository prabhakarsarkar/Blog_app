module.exports = (router,knex)=>{
    router.post("/post_blog",(req,res)=>{
        console.log(req.body);
        knex('blog').insert(req.body).then((data)=>{
            res.send("post secssful")
        }).catch((err)=>{
            console.log(err);
            
        })
    })
}