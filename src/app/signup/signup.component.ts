import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CredentialPayload } from 'src/models/credential.payload';
import { JwtResponse } from 'src/models/jwt.response';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  credentialsForm: FormGroup
  constructor(private _signupService: SignupService, private router: Router) {

        this.credentialsForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      userfname: new FormControl("", [Validators.required]),
      userlname: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      role: new FormControl("", [Validators.required]),
    })
  }
  
  ngOnInit(): void {
    localStorage.clear();
  }

  signup(userame: string,userfname:string,userlname:string, password: string,role:string) {
    var credentialPayload: CredentialPayload = {
      userName: userame,
      userFirstName:userfname,
      userLastName:userlname,
      userPassword: password,
      role:role
    }
    this._signupService.signup(credentialPayload).subscribe({
      next: (res: any) => {
        if (!!res.statusCode) {
          alert(res.message)
        } else {
          var jwt: JwtResponse = res
          localStorage.setItem('token', jwt.jwtToken)
          localStorage.setItem('loggedInUser', credentialPayload.userName)
          console.log('JWT from Server : ', jwt)
          this.router.navigate(["home"])
        }
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

}
