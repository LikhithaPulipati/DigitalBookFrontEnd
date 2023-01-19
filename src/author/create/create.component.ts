import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthorPayload } from 'src/models/author.payload';
import { BookDto } from 'src/models/book.dto';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  bookForm: FormGroup;
  message: string = ''

  constructor(private _createService: CreateService, private router: Router) {

    if(!this.isAuthor()){
      this.router.navigate(["login"])
    }
    this.bookForm = new FormGroup({
      'title': new FormControl("", Validators.required),
      'category': new FormControl("", Validators.required),
      'logo': new FormControl("", Validators.required),
      'price': new FormControl(Validators.min(0)),
      'author': new FormControl("", Validators.required),
      'authorID': new FormControl("", Validators.required),
      'publisher': new FormControl("", Validators.required),
      'publishedDate': new FormControl("", Validators.required),
      'active': new FormControl("true", Validators.required),
      'content': new FormControl("", Validators.required),
      'subscription': new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
  }

  createBook() {

    if (this.isAuthor()) {
      var bookDto: BookDto = {
        
        title: this.bookForm.value.title,
        category: this.bookForm.value.category,
        logoImage: this.bookForm.value.logo,
        price: this.bookForm.value.price,
        author: getAuthor(),
        author_id:getAuthor(),
        publisher: this.bookForm.value.publisher,
        publishedDate:this.bookForm.value.publishedDate,
        active: true,
        content: this.bookForm.value.content,
        subscription:false
      }
      // var authorPayload: AuthorPayload = {
      //   name: getAuthor(),
      //   bookDtoList: [bookDto]
      // }
      this._createService.createBook(getAuthor(), getAuthorToken(),bookDto).subscribe({
        next: (res: any) => {
          if (!!res.statusCode) {
            alert(res.message)
          } else {
            this.message = "Book Has Been Created Successfully"
          }
        },
        error: (err: any) => {
          console.log(err)
          //localStorage.clear();
          this.router.navigate(["login"])
        }
      })
    } else {
      this.router.navigate(["login"])
    }
  }

  isAuthor(){
    var author = localStorage.getItem('token')
    if (author) {
      return true
    } else {
      return false
    }
  }

}

function getAuthor(): string {
  var author = localStorage.getItem('loggedInUser')
  if (author) {
    return author
  } else {
    return ""
  }
}

function getAuthorToken(): string {
  var authorToken = localStorage.getItem('token')
  if (authorToken) {
    return authorToken
  } else {
    return ""
  }
}

