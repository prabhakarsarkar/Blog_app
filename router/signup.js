module.exports = (router, knex) => {
    router.post("/signup", (req, res) => {
        if (req.body.name !== undefined
            && req.body.password !== undefined
            && req.body.gmail !== undefined) {
            knex.select('*').from('signup')
                .where("gmail", req.body.gmail)
                .then((data) => {
                    if (data.length > 0) {
                        console.log("you allready signup please login");

                    } else {

                        knex('signup').insert(req.body).then((data) => {
                            console.log("signup seussfull");
                            res.send("ok")

                        }).catch((err) => {
                            console.log("err");

                        })
                    }
                }).catch((err) => {
                    console.log(err);

                })
        } else {
            console.log("fill the from");
        }


    })
}