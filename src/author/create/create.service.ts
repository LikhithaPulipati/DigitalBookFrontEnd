import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorPayload } from 'src/models/author.payload';
import { BookDto } from 'src/models/book.dto';


@Injectable({
  providedIn: 'root'
})
export class CreateService {

  //private author_url = authorurl.url;
  // private create_url:string="http://localhost:8083/author/createbook/"
  private create_url:string="http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/author/createbook/"
 // private create_url:string="https://wbxfuk0fjj.execute-api.ap-south-1.amazonaws.com/test/author/createbook/"
  constructor(private http: HttpClient) { }

  createBook(authorName: string, authorToken: string,bookDto:BookDto) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + authorToken);
    return this.http.post(this.create_url+authorName, bookDto, {'headers': headers});
  }
}
