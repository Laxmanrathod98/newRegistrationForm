const mongoose=require("mongoose");

const formSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    firstpwd:{
        type:String,
    },
    secondpwd:{
        type:String,
    }
})
const formModel=mongoose.model("GetData",formSchema)

module.exports=formModel;