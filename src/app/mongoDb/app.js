const express=require("express");  
const cors=require("cors")
const app=express();
const nodemailer=require("nodemailer");
const port=process.env.PORT || 8000
require("./conn");
const Form=require("./registrationDetailes");
app.use(express.json());
app.use(cors())

app.post("/enroll",async(req,res)=>{
    try{
        // const form=new Form(req.body);
        // await form.save();
        // res.json(form);
        console.log("request came");
        let user=req.body;
        sendMail(user,info=>{
            console.log(`The mail is send ${info.messageId}`);
        })
        res.send(info);

    }catch(e){
        res.status(400).send(e);
    }
})
app.get("/enroll",async(req,res)=>{
   try{
    const form=await Form.find({})
    res.json(form);
   }catch(e){
    res.send(e);
   }
})
app.get("/enroll/:email",async(req,res)=>{
    try{
       const email=req.params.email; 
     const loginData=await Form.findOne({email:email});
     res.send(loginData);
    }catch(e){
     res.send(e);
    }
 })
app.listen(port,()=>{
    console.log(`connection is set up at ${port}`);
}) 
async function sendMail(user,callback){
    let transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:"1998laxmanrathod@gmail.com",
            pass:"ijkl.123"
        }
    });
    let mailOption=({
        from: "sdjsdf ",
        to: "1998laxmanrathod@gmail.com", 
        subject: "Hello ✔", 
        text: "Hello world?", 
        html: "<b>Hello world?</b>", 
      });
    let info=await transporter.sendMail(mailOption);
    callback(info);
}