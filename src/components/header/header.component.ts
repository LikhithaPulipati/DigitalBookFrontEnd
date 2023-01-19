import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn(): boolean {
    var token = localStorage.getItem('token')
    //console.log('isUserLoggedIn',token)
    if (token) {
      return true
    } else {
      return false
    }
  }

  getAuthorRole(): boolean {
    var role = localStorage.getItem('userRole')
    var token = localStorage.getItem('token')
    if (token && role === ('ADMIN')) {
      return true
    } else {
      return false
    }
  }
  getUserRole(): boolean {
    var role = localStorage.getItem('userRole')
    if (role?.indexOf('R')) {
      return true
    } else {
      return false
    }
  }


  constructor() { }

  ngOnInit(): void {
  }


}
//  getUserRole(): boolean {
//   var role = localStorage.getItem('loggedInUser')
//   if (role?.indexOf('A')) {
//     return true
//   } else {
//     return false
//   }
// }

