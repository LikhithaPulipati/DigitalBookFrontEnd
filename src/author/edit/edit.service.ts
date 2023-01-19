import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorPayload } from 'src/models/author.payload';
import { BookDto } from 'src/models/book.dto';


@Injectable({
  providedIn: 'root'
})
export class EditService {

  //private author_url = authorurl.url;
  // private edit_url: string = "http://localhost:8083/author/updatebook/";
  private edit_url: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/author/updatebook/";
  constructor(private http: HttpClient) { }

  editBook(authorName: string, authorToken: string,bookDto:BookDto) {
    console.log(bookDto);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + authorToken);
    var url = this.edit_url + authorName+"/"+bookDto.id;
    console.log("Created Create URL : ", this.edit_url)
    return this.http.put(url, bookDto, {'headers': headers});
  }
}
