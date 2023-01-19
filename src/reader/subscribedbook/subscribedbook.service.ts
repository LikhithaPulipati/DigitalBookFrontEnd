import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SubscribedbookService {

  
  // private subscribe_url_prefix: string = "http://localhost:8083/subscriptionBookList";
  // private unsubscribe_url: string = "http://localhost:8083/unsubscribe/";
  // private readBookContent_url: string = "http://localhost:8083/readersubscriptionBookContent/";
  private subscribe_url_prefix: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/subscriptionBookList";
  private unsubscribe_url: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/unsubscribe/";
  private readBookContent_url: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/readersubscriptionBookContent/";

  constructor(private http: HttpClient) { }

  subscribedBooks(readerName: string, token: string) {
   // console.log(subscriptionid)
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + token);
   // console.log("constructed Read URL : " + this.reader_url_prefix + url)
   // return this.http.get(this.reader_url_prefix +readerName, { 'headers': headers });
   var url = this.subscribe_url_prefix +"/"+readerName;
    return this.http.get(url , { 'headers': headers });
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

  readBookContent(authorName: String, bookId: number,authorToken: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + authorToken);
    var url = this.readBookContent_url + authorName + "/" + bookId ;
    console.log("Created Create URL : ", this.readBookContent_url)
    return this.http.get(url, { 'headers': headers });
  }


}
