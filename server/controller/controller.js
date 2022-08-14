const userDB = require('../model/userModel');
const UserModel = require('../model/userModel');

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
        user
            .save(user)
            .then(data => {
                console.log(data);
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({message: err.message || "An error occured while saving user details to the databse."})
            })
    }
}
