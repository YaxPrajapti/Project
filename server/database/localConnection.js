const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Eventrra');
        // const db = mongoose.connection;
        // db.on("error", console.error.bind(console, "connection error"));
        // db.once("open", () => {
        //     console.log("Database connected.");
        // })
        console.log("Database connected.")
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectdb;
