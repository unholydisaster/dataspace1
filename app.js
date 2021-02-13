const express=require('express')
const app =express()
const mongoose=require('mongoose')
const bodyParser =require('body-parser')
const cors =require('cors')
require('dotenv/config')

//middlewares
app.use(cors())
app.use(bodyParser.json())
//import Routes
const postsRoutes = require('./routes/posts.js')

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
app.listen(3000)