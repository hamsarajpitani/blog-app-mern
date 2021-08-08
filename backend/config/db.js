const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


const connectDb = async ()=>{
    try {        
        const connect = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        console.log(`connected successfully ${connect.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;