import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8000/enroll'
  enroll(data){
    return this.http.post<any>(this.url,data)  
  }
  data;
  urlGet;
  enrollData(data){
    this.urlGet=`http://localhost:8000/enroll/${data}`
    return this.http.get<any>(this.urlGet);  
  }
}
