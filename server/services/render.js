const axios = require('axios');

exports.homeroute = (req, res) => {
    console.log("Application started.");
    res.render('landing.ejs');
}

exports.loginroute = (req, res) => {
    console.log("Requested for login page");
    res.render('login');
}