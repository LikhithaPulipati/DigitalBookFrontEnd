import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialPayload } from 'src/models/credential.payload';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  
  //private signup_url: string = "http://localhost:8083/registerNewUser";
  private signup_url: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/registerNewUser";

  constructor(private http:HttpClient) { }

  signup(credentialPayload:CredentialPayload){
    console.log("Created Signup URL : ",this.signup_url);
    return this.http.post(this.signup_url,credentialPayload);
  }

}
