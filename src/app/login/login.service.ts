import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialloginPayload } from 'src/models/credentiallogin.payload';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
  // private login_url: string = "http://localhost:8083/sign-in"
  private login_url: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/sign-in"
  //private login_url: string = "https://wbxfuk0fjj.execute-api.ap-south-1.amazonaws.com/test/sign-in"

  login(credentialloginPayload: CredentialloginPayload) {
   // console.log("Created Signup URL : ", this.login_url)
    return this.http.post(this.login_url, credentialloginPayload);
  }

  constructor(private http: HttpClient) { }
}
