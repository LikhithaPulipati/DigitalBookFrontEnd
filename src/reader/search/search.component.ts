import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookDto } from 'src/models/book.dto';
import { BookPayload } from 'src/models/book.payload';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchForm: FormGroup;
  message:any;
  bookPayload: BookPayload = {
    bookDtoList: []
  }
  bookId!: number;

  constructor(private _searchService: SearchService, private router: Router) {

    if(!this.isReader()){
      this.router.navigate(["home"])
    }
    //this.findBookContent(bookId);
    this.searchForm = new FormGroup({
      id: new FormControl([Validators.min(0), isNaN])
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

  

  subscribe(bookDto: BookDto) {
    console.log(bookDto);
    localStorage.setItem("subscribe", JSON.stringify(bookDto));
    this.router.navigate(["/reader/subscribe"]);
  }

  findBookContent(bookId:any) {
    console.log("passing Id",bookId);
    this._searchService.findBookContent(getUser(),bookId,getUserToken()).subscribe({
      next: (res: any) => {
        if (!!res.statusCode) {
          alert(res.message)
        } else {
          this.message = res.error.text;
          console.log(this.bookPayload);
        }
      },
      error: (err: any) => {
        this.message=err.error.text;
        console.log(err)
      }
    })
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
