require('dotenv').config();
const connectToMongo=require('./db');
const express=require('express');
var cors=require('cors')
connectToMongo();

const app=express();
const port=process.env.PORT || 5000;
const host=process.env.BASE_URL;

app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{
    console.log(`Example app listening at ${host}`)
})
