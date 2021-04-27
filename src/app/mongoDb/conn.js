const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://Laxman:laxman@project.2gxpr.mongodb.net/test',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection is success");
}).catch((e)=>{
    console.log("connection failed");
})
