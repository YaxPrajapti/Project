const axios = require('axios');

exports.landingRoute = (req, res) => {
    console.log("Application started.");
    res.render('landing.ejs');
}

// exports.loginroute = (req, res) => {
//     console.log("Requested for login page");
//     res.render('login');
// }

exports.loginroute = (req, res) => {
    console.log('Requested for login page');
    res.render('login');
}

exports.signUproute = (req, res) => {
    console.log("Requested for signUp page");
    res.render('signUp');
}