import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { JwtResponse } from 'src/models/jwt.response';
import { CredentialloginPayload } from 'src/models/credentiallogin.payload';
import { CredentialPayload } from 'src/models/credential.payload';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentialsForm: FormGroup

  constructor(private _loginService: LoginService, private router: Router) { 
    if(!this.isReader()){
      this.router.navigate(["home"])
    }
    this.credentialsForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }


  isReader(){
    var author = localStorage.getItem('authorToken')
    if (author) {
      return false
    } else {
      return true
    }
  }

  ngOnInit(): void {
    localStorage.clear();
  }
  login(username: string, password: string) {
    var credentialloginPayload: CredentialloginPayload = {
      userName: username,
      userPassword: password
    }
    var credentialPayload: CredentialPayload = {
      userName:"",
    userFirstName: "",
    userLastName:"",
    userPassword:"",
    role:""
    }
    this._loginService.login(credentialloginPayload).subscribe({
      next: (res: any) => {
        if (!!res.statusCode) {
          alert(res.message)
        } else {
          var jwt: JwtResponse = res
          localStorage.setItem('token', jwt.jwtToken)
          localStorage.setItem('loggedInUser', credentialloginPayload.userName)
          console.log(credentialloginPayload.userName);
          localStorage.setItem('userRole',res.user.role)
          console.log(res.user.role);
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
