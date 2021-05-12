import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import {RegistrationService} from '../registration.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {

  constructor(private service:RegistrationService,private router:Router) { }
  objData;
  registrationForm:any=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    firstpwd:new FormControl('',[Validators.required,Validators.minLength(2)]),
    secondpwd:new FormControl('',[Validators.required,Validators.minLength(2)])
  }); 
  ngOnInit(): void {
  }
  get name(){
    return this.registrationForm.get('name')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get firstpwd(){
    return this.registrationForm.get('firstpwd')
  }
  get secondpwd(){
    return this.registrationForm.get('secondpwd')
  }
  emailData="asdjm@sdld";
  collectData(){
            this.objData=this.registrationForm.value;
            this.emailData=this.registrationForm.value.email;
            console.log(this.emailData);
            this.service.enroll(this.objData).subscribe(
            data=>{
              console.log('success',data)
            },
            error=>console.log('error',error)
          )
    }
    localStorage(){
      window.localStorage.setItem("email",this.emailData);
                console.log("updated");
    }
    token;
    invalidEmail(){
      this.objData=this.registrationForm.value.email;
      this.service.enrollData(this.objData).subscribe(
      data=>{
          if(data != null){
            this.token=1;
          }else{
            this.token=0;
          }
        },
      error=>console.log(error)
    )
    }
}
