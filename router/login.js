module.exports = (router,knex,jwt)=>{
    router.post("/login",(req,res)=>{
        knex.select("*").from('signup')
        .where("gmail",req.body.gmail).then((data)=>{
            console.log(data);
           if(req.body.gmail==data[0].gmail){
               console.log(data[0].gmail);
               
               let token = jwt.sign(data[0].gmail,"raj")
               res.send({token:token})

               console.log("login")
           }else{
               console.log("fast signup");
               
           }
        })
    })
}