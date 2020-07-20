module.exports = (router,knex)=>{
    router.put("/update_blog/:id",(req,res)=>{
        knex('blog').where("id",req.params.id).update(req.body).then((data)=>{
            res.send("update successfull")
        }).catch((err)=>{
            console.log(err);
            
        })
    })
}