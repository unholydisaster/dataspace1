const express=require('express')
const app =express()
const mongoose=require('mongoose')
const bodyParser =require('body-parser')
const cors =require('cors')
require('dotenv').config();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//import Routes
const postsRoutes = require('./routes/posts.js')

const PORT=3000;
app.use('/posts', postsRoutes)
//routes
app.get('/',(req,res)=>{
    res.send()
})
 
//connect to mongoose database
mongoose.connect(process.env.DB_CONNECTION,
 { useUnifiedTopology: true },
  ()=> console.log('connected'))
//how do we start listening to the server
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
