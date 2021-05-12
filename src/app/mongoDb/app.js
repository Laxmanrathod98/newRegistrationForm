const express=require("express");  
const cors=require("cors")
const app=express();
const jwt=require('jsonwebtoken')
const nodemailer=require("nodemailer");
const port=process.env.PORT || 8000
require("./conn");
const Form=require("./registrationDetailes");
app.use(express.json());
app.use(cors())

app.post("/enroll",async(req,res)=>{
    try{
        const form=new Form(req.body);
         await form.save();
         res.json(form);
         console.log(form.email);
         sendMail(form.email);
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
// EMAIL_SECRETE="emailer"
// async function sendMail(email){
//   const email_token=jwt.sign({id:email},EMAIL_SECRETE);
//   url=`http://localhost:8000/forms/activate/${email_token}/${email}`;
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: '1998laxmanrathod@gmail.com',
//       pass: 'ijkl.123'
//     }
//   });
  
//   var mailOptions = {
//     from: '1998laxmanrathod@gmail.com',
//     to: email,
//     subject: 'Sending Email Verification',
//     html :`skf,ldfdfl ${url}`
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// }
// app.get('/forms/activate/:token/:email',async(req,res)=>{
//   let token=req.params.token;
//   let email=req.params.email;
//   let verfied=jwt.verify(token,EMAIL_SECRETE);
//   if(verfied){
//     try{
//     await Form.updateOne({email:email},{$set:{confirm:true}});  
//     res.send("'verfied");
//     }
//     catch(err){
//         res.status(400).send("not verified to register")
//     }
//   }else{
//     res.send("not verified");
//   }
// })
app.get('/forms/activate/:token/:email',async(req,res)=>{
    let token=req.params.token;
    let email=req.params.email;
    let verfied=jwt.verify(token,EMAIL_SECRETE);
    if(verfied){
      try{
          
      res.send(`<in`);
      }
      catch(err){
          res.status(400).send("not verified to register")
      }
    }else{
      res.send("not verified");
    }
  })