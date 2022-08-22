const mongoose = require('mongoose');

// const url = process.env.MONGO_URI;

const connectdb = async (req, res) => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongodb connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectdb;