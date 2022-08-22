const userDB = require('../model/userModel');
const dotenv= require('dotenv');

dotenv.config({ path: 'config.env' });
const port = process.env.PORT || 3000;

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
                            res.redirect(`http://localhost:${port}`); // remove this after completion of the next page.    
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
            const {username, password} = req.body;
            userDB.findOne({username: username, password: password})
            .then(data => {
            if(!data){
                res.send("User with this credentials does not exits.");
            }else{
                console.log(data)
                res.redirect(`http://localhost:${port}`); // remove this after completion of the next page. 
            }
        })
    }
}
