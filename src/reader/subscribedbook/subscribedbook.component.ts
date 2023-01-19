import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookDto } from 'src/models/book.dto';
import { BookPayload } from 'src/models/book.payload';
import { ReaderPayload } from 'src/models/reader.payload';
import { SubscribedbookService } from './subscribedbook.service';

@Component({
  selector: 'app-subscribedbook',
  templateUrl: './subscribedbook.component.html',
  styleUrls: ['./subscribedbook.component.scss']
})
export class SubscribedbookComponent implements OnInit {
  bookPayload:Array<BookDto> =[];
  message: string = ""
  subscribeForm: FormGroup;
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
  // subscriptionid!: number | 0;
  
  
  constructor(private _subscribedBookService: SubscribedbookService, private router: Router) {
    if(!this.isReader()){
      this.router.navigate(["home"])
    }

    this.subscribeForm = new FormGroup({
      'formid': new FormControl("", [Validators.required,Validators.min(1)])
    })
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
    this.subscribedBooks();
  }

  subscribedBooks(){
    this._subscribedBookService.subscribedBooks(getUser(), getUserToken()).subscribe(
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

  readBookContent(bookId:number){
     this._subscribedBookService.readBookContent(getUser(),bookId,getUserToken()).subscribe(
       {
         
         next: (res: any) => {
           console.log(res)
          this.message = res
        
           alert("Book got Unsubcribed");
         },
         error: (err: any) => {
           console.log(err);
          
         } 
       
       }
     )
   }

  unsubscribeBook(bookId:number){
    // console.log(authorName,bookId)
     this._subscribedBookService.unsubscribeBook(getUser(),bookId,getUserToken()).subscribe(
       {
         
         next: (res: any) => {
          alert("Book got Unsubcribed");
         },
         error: (err: any) => {
           console.log(err);
           this.message=err.error.text;
           alert(err.error.text);
          //  this.issubscribed = true
          //    this.isUnsubscribed =false
          // localStorage.clear();
           //this.router.navigate(["/login"])
         } 
       
       }
     )
   }

  // subscribeBook(formid:string) {
  //   if (getUser) {

  //     let subscriptionid: number = this.subscribeForm.value['formid'];
  //     console.log(subscriptionid);
      
  //     // var authorPayload: AuthorPayload = {
  //     //   name: getAuthor(),
  //     //   bookDtoList: [bookDto]
  //     // }
      
  //     this._subscribedBookService.subscribeBook(getUser(), getUserToken(),subscriptionid).subscribe({
  //       next: (res: any) => {
  //         if (!!res.statusCode) {
  //           alert(res.message)
  //         } else {
  //           this.message = "Book got subscribed"
  //         }
  //       },
  //       error: (err: any) => {
  //         console.log(err)
  //         localStorage.clear();
  //         this.router.navigate(["/login"])
  //       }
  //     })
  //   } else {
  //     this.router.navigate(["/login"])
  //   }

  // }
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