import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import {RegistrationService} from '../registration.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objData;
  loginEmail;
  objFirstpwd;
  constructor(private service:RegistrationService,private router:Router) { }
  loginForm:any=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    firstpwd:new FormControl('',[Validators.required,Validators.minLength(2)]),
  });
  get email(){
    return this.loginForm.get('email')
  }
  get firstpwd(){
    return this.loginForm.get('firstpwd')
  }
  ngOnInit(): void {
  }
  loding;
  collectData(){
    this.objData=this.loginForm.value.email;
    this.objFirstpwd=this.loginForm.value.firstpwd;
    this.service.enrollData(this.objData).subscribe(
      data=>{
          if(data  == null){
            let h1=document.getElementById("demo");
            h1!.innerHTML="Email is does not exit";
            h1!.style.color="red"
          }
          else if(data.email==this.objData && data.firstpwd==this.objFirstpwd){
          if(data.confirm==true){
          let h1=document.getElementById("demo");
          h1!.innerHTML="Login success";
          h1!.style.color="red"
          }else{
           //console.log("plz verify email");
           let h1=document.getElementById("demo");
           h1!.innerHTML="plz verify email";
           h1!.style.color="red" 
          }
          }else{
            let h1=document.getElementById("demo");
            h1!.innerHTML="Invalid Password";
            h1!.style.color="red"
          }
        },
      error=>console.log(error)
    )}
    onRegister(){
      this.router.navigate(['/regestration']);
    }
}
