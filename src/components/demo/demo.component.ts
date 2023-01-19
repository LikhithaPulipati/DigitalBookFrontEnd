import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  
  // isUserLoggedIn(): boolean {
  //   var token=localStorage.getItem('token')
  //   //console.log('isUserLoggedIn',token)
  //   if(token){
  //     return true
  //   }else{
  //     return false
  //   }
  // }

  // getAuthorRole(): boolean {
  //   var role = localStorage.getItem('userRole')
  //  // console.log('getAuthorRole',role);
  //   if (role?.indexOf('A')) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  // getUserRole(): boolean {
  //   var role = localStorage.getItem('userRole')
  //   if (role?.indexOf('R')) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  

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

