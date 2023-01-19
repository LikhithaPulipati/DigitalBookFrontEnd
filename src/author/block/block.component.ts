import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorPayload } from 'src/models/author.payload';
import { BookDto } from 'src/models/book.dto';
import { BlockService } from './block.service';
import { BookPayload } from 'src/models/book.payload';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {
  bookPayload:Array<BookDto> =[];
  
  
// bookPayload!: BookDto[];
  //  bookPayload: BookPayload = {
  //    bookDtoList: []
  //  }
  

  // bookPayload!: BookDto[];
  //  bookPayload: BookPayload = {
  //    bookDtoList: []
  //  }
  isBlocked: boolean = false; 
  isUnblocked:boolean =false;

  bookDto: BookDto = {
    
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
    
  // bookPayload: BookPayload = {
  //   bookDtoList: []
  // }

  constructor(private _blockService: BlockService, private router: Router) {

    
  }
  ngOnInit(){
    console.log(getUser())
    this.userBooks();
  }
  blockUserBook(authorName: String,bookId:number){
    console.log(authorName,bookId)
    this._blockService.blockBook(getUser(),bookId,getUserToken()).subscribe(
      {
        
        next: (res: any) => {
          this.isBlocked = true
            this.isUnblocked =false
          // if (!!res.statusCode) {
          //   alert(res.message)
          // } else {
          //   this.isBlocked = true
          //   this.isUnblocked =false
          // }
        },
        error: (err: any) => {
          console.log(err)
          this.isBlocked = true
            this.isUnblocked =false
         // localStorage.clear();
          //this.router.navigate(["/login"])
        } 
      
      }
    )
  }
  unBlockUserBook(authorName: String,bookId:number){
    console.log(authorName,bookId)
    this._blockService.unblockBook(getUser(),bookId,getUserToken()).subscribe(
      {
        
        next: (res: any) => {
          this.isBlocked = false
            this.isUnblocked =true
          // if (!!res.statusCode) {
          //   alert(res.message)
          // } else {
          //   this.isBlocked = false
          //   this.isUnblocked =true
          // }
        },
        error: (err: any) => {
          console.log(err)
          this.isBlocked = false
            this.isUnblocked =true
         // localStorage.clear();
         // this.router.navigate(["/login"])
        } 
      
      }
    )
  }
  userBooks(){
    this._blockService.getAllBooksForAuthor(getUser(), getUserToken()).subscribe(
      {
        next: (res: any) => {
          if (!!res.statusCode) {
            alert(res.message)
          } else {
            console.log(res)
            this.bookPayload = res
            console.log(this.bookPayload.length);
          }
        },
        error: (err: any) => {
          console.log(err)
         // localStorage.clear();
          this.router.navigate(["/login"])
        } 
      }
         
      
    )
  }
  // blockBook(title: string, category: string, logo: string,price: string,author:string,authorId:string, publisher: string,publishedDate:string ,active: string, content: string,subscription:string) {
  //   if (getUser && this.bookDto.id ) {
  //    // && this.bookDto.id
  //     var bookDto: BookDto = {
  //      // id:this.bookDto.id,
  //       title: title,
  //       category: category,
  //       logoImage: logo,
  //       price: Number(price),
  //       author: getUser(),
  //       author_id:getUser(),
  //       publisher: publisher,
  //       publishedDate:publishedDate,
  //       active: Boolean(active),
  //       content: content,
  //       subscription:Boolean(subscription)
        
  //     }












      // var authorPayload: AuthorPayload = {
      //   name: getUser(),
      //   bookDtoList: [bookDto]
      // }
      // this._blockService.blockBook(authorPayload, getUserToken(),this.bookDto.id).subscribe(
      //   {
      //   next: (res: any) => {
      //     if (!!res.statusCode) {
      //       alert(res.message)
      //     } else {
      //       this.message = "Book Has Been blocked Successfully"
      //     }
      //   },
      //   error: (err: any) => {
      //     console.log(err)
      //     localStorage.clear();
      //     this.router.navigate(["author/login"])
      //   }
      // }
      // )
//     } else {
//       this.router.navigate(["author/login"])
//     }
//   }

 
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