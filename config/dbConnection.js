// const mongoose = require("mongoose");

// const connectToDatabase=async()=>{mongoose.connect(process.env.DB_URL).then((con)=>{
//     console.log("Database Connected Successfully")
// }).catch((err)=>{
//     console.log("Error While Connecting to DB",err.message)
// })}

// module.exports ={connectToDatabase};






const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL 

const connectDatabase = () => {
    try {
        mongoose
        .connect(MONGODB_URL)
        .then((conn) => console.log(`Connected to DB: ${conn.connection.host}`));
    } catch (error) {
        console.log(err.message);
    }
}

module.exports = connectDatabase;