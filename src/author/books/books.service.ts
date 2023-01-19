import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //private author_url = authorurl.url;
  // private my_books_url =  "http://localhost:8083/getBooks/"
  private my_books_url =  "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/getBooks/"

  constructor(private http: HttpClient) { }

  getAllBooksForAuthor(authorName: string, authorToken: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + authorToken);
      console.log(authorName);
    var url = this.my_books_url + authorName 
    return this.http.get(url, { 'headers': headers })
  }
}
