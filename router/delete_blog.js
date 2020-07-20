module.exports = (router,knex)=>{
    router.delete("/delete_blog/:id",(req,res)=>{
        knex('blog'),where('id',req.params.id).del().then(()=>{
            res.send("delete successful")
        }).catch((err)=>{
            console.log(err);
            
        })
    })
}