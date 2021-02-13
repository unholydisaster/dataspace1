const mongoose=require('mongoose')

const PostSchema=mongoose.Schema({
    homeTeam:{
        type:String,
        required:true
    },
    awayTeam:{
        type:String,
        required:true
    },
    pick:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Posts',PostSchema)