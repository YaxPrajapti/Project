const userDB = require('../model/userModel');

exports.createNewUser = (req, res) => {
    //check if the body is empty.
    if (!req.body) {
        return res.status(400).send("Body element can not be empty.");
    } else {
        const user = new userDB({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

        //save the user to database
        userDB.findOne({ email: req.body.email })
            .then(data => {
                if (!data) {
                    user
                        .save(user)
                        .then(data => {
                            console.log(data);
                            res.send(data);
                        })
                        .catch(err => {
                            res.status(500).send({ message: err.message || "An error occured while saving user details to the databse." })
                        })
                }
                else{
                    res.send('user already exist');
                }
            }).catch(err => {
                res.status(500).send({message: err.message || "An error occured"});
            })
    }
}

exports.loginUser = (req, res) => {
    if(!req.body){
        return res.status(500).send("Please fill all fields.");
    }else{
        username = req.body.username;
        password = req.body.password;
        const user = userDB.findOne({username: username, password: password})
        if(!user){
            res.status(404).send("User may not exist. Try to sign up");
        }else{
            if(user.username !== username || user.password !== password){
                res.status(400).send("Invalid login credentials.");
            }
        }
    }
}