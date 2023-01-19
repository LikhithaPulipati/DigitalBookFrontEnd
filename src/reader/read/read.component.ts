import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDto } from 'src/models/book.dto';
import { BookPayload } from 'src/models/book.payload';
import { ReaderPayload } from 'src/models/reader.payload';
import { ReadService } from './read.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  bookPayload:Array<BookDto> =[];
  issubscribed: boolean = false; 
  isUnsubscribed:boolean =false;
  message: any;
  // bookPayload: BookPayload = {
  //   bookDtoList: []
  // }
  bookDto: BookDto = {
    id: 0,
    title: "",
    category: "",
    logoImage: "",
    price: 0,
    author: "",
    author_id: "",
    publisher: "",
    publishedDate: "",
    active: true,
    content:"",
    subscription:false
    
  }
  constructor(private _readService: ReadService, private router: Router) {
    // if(!this.isReader()){
    //   this.router.navigate(["home"])
    // }
   
    
  }
  isReader(){
    var reader = localStorage.getItem('token')
    if (reader) {
      return true
    } else {
      return false
    }
  }
  ngOnInit(): void {
    this.userBooks();
  }
  subscribeBook(bookId:number){
    if(!this.isReader()){
        this.router.navigate(["/login"])
       } else {
       this._readService.subscribeBook(getUser(),bookId,getUserToken()).subscribe(
      {
        
        next: (res: any) => {
              // if (!!res.statusCode) {
          //   alert(res.message)
          // } else {
          //   this.isBlocked = true
          //   this.isUnblocked =false
          // }
         // this.message="Book subscribed successfully";
        },
        error: (err: any) => {
          console.log(err)
          console.log(err.error.text)
         // this.issubscribed = true
          //  this.isUnsubscribed =false
            this.message=err.error.text;
            alert(err.error.text);
         // localStorage.clear();
          //this.router.navigate(["/login"])
        } 
      
      }
    )
  }
}

  unsubscribeBook(bookId:number){
    // console.log(authorName,bookId)
     this._readService.unsubscribeBook(getUser(),bookId,getUserToken()).subscribe(
       {
         
         next: (res: any) => {
           this.issubscribed = true
             this.isUnsubscribed =false
     
         },
         error: (err: any) => {
           console.log(err)
           this.issubscribed = true
             this.isUnsubscribed =false
          // localStorage.clear();
           //this.router.navigate(["/login"])
         } 
       
       }
     )
   }
  userBooks(){
    this._readService.readBook(getUser(), getUserToken()).subscribe(
      {
        next: (res: any) => {
          if (!!res.statusCode) {
            alert(res.message)
          } else {
            this.bookPayload = res
          }
        },
        error: (err: any) => {
          console.log(err)
          localStorage.clear();
          this.router.navigate(["/login"])
        } 
      }
         
      
    )
  }
  
}
function getUser(): string {
  var user = localStorage.getItem('loggedInUser')
  if (user) {
    return user
  } else {
    return ""
  }
}

function getUserToken(): string {
  var token = localStorage.getItem('token')
  if (token) {
    return token
  } else {
    return ""
  }
}