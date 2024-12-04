const mongoose = require('mongoose')




const connection = async()=>{
    try{
        await mongoose.connect(process.env.mongo_url, {
        
        })
        console.log("Connected to MongoDB successfully")
    }catch(error)
    {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1);
    }
}


module.exports = connection;