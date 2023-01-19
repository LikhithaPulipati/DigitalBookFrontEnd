import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ReadService {

  
  // private reader_url_prefix: string = "http://localhost:8083/getAllBooks";
  // private subscribe_url: string = "http://localhost:8083/subscribe/";
  // private unsubscribe_url: string = "http://localhost:8083/unsubscribe/";
  private reader_url_prefix: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/getAllBooks";
  private subscribe_url: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/subscribe/";
  private unsubscribe_url: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/unsubscribe/";

  constructor(private http: HttpClient) { }

  readBook(readerName: string, token: string) {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + token);

   // console.log("constructed Read URL : " + this.reader_url_prefix + url)
   // return this.http.get(this.reader_url_prefix +readerName, { 'headers': headers });
    return this.http.get(this.reader_url_prefix , { 'headers': headers });
  }
  subscribeBook(authorName: String, bookId: number,authorToken: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + authorToken);
    var url = this.subscribe_url + bookId + "/" + authorName;
    console.log("Created Create URL : ", this.subscribe_url)
    return this.http.get(url,{ 'headers': headers });
  }
  unsubscribeBook(authorName: String, bookId: number,authorToken: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + authorToken);
    var url = this.unsubscribe_url + bookId + "/" + authorName;
    console.log("Created Create URL : ", this.unsubscribe_url)
    return this.http.get(url, { 'headers': headers });
  }

}
