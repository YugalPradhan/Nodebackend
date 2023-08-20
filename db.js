const mongoose=require("mongoose");
const mongoURI=process.env.DB_URI;
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports=connectToMongo;