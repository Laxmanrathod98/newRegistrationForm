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
    email:new FormControl('',[Validators.required,Validators.email]),
    firstpwd:new FormControl('',[Validators.required,Validators.minLength(8)]),
    secondpwd:new FormControl('',[Validators.required,Validators.minLength(8)])
  }); 
  ngOnInit(): void {
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
  collectData(){
    this.objData=this.registrationForm.value;
    this.service.enroll(this.objData).subscribe(
      data=>{
        console.log('success',data)
      },
      error=>console.log('error',error)
    )}
    onLogin(){
      this.router.navigate(['/login']);
    }
}
