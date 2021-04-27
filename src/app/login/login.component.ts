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
    firstpwd:new FormControl('',[Validators.required,Validators.minLength(8)]),
  });
  get email(){
    return this.loginForm.get('email')
  }
  get firstpwd(){
    return this.loginForm.get('firstpwd')
  }
  ngOnInit(): void {
  }
  collectData(){
    this.objData=this.loginForm.value.email;
    this.objFirstpwd=this.loginForm.value.firstpwd;
    this.service.enrollData(this.objData).subscribe(
      data=>{
          if(data  == null){
            console.log("Email does not exit please register");
          }
          else if(data.email==this.objData && data.firstpwd==this.objFirstpwd){
          console.log("success");
          }else{
            console.log("invalid pwd" );
          }
        },
      error=>console.log(error)
    )}
    onRegister(){
      this.router.navigate(['/regestration']);
    }

}

