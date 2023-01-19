import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorPayload } from 'src/models/author.payload';
import { BookDto } from 'src/models/book.dto';
import { EditService } from './edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  message: string = ""
  bookForm: FormGroup;
  /*bookDto: BookDto = {
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
    
  }*/

  constructor(private _editService: EditService, private router: Router) {

    if(!this.isAuthor()){
      this.router.navigate(["login"])
    }
    
   /* var edit = localStorage.getItem('edit');
    if (edit) {
      this.bookDto = JSON.parse(edit);
    } else {
      this.router.navigate(["/author/books"]);
    }*/
    this.bookForm = new FormGroup({
      'formid': new FormControl("", Validators.required),
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
  editBook() {
    if (getAuthor) {
      var bookDto: BookDto = {
        id:this.bookForm.value.formid,
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
      this._editService.editBook(getAuthor(), getAuthorToken(),bookDto).subscribe({
        next: (res: any) => {
          if (!!res.statusCode) {
            alert(res.message)
          } else {
            this.message = "Book Has Been Edited Successfully"
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