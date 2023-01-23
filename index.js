const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require ('dotenv').config();
const cors = require('cors');
const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/users')



//mongoose connection
const uri = process.env.ATLAS_URI
mongoose.set('strictQuery', false);
mongoose.connect(uri,err => {
    if(err) throw err;
})
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Db connection successfully")
})

//Middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

//routes
app.use('/posts',postRoutes)
app.use('/user',userRoutes)

app.listen(5000, () => {
    console.log(`server is running`);
})