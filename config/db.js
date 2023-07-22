const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect To Mongodb ${mongoose.connection.host}`.bgYellow.white);
    } catch (error) {
        console.log(`Mongodb Error ${error}`.bgRed.white);
    }
}

module.exports = connectDB