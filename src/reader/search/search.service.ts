import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  
  // private search_url_prefix: string = "http://localhost:8083/readersubscriptionBookContent/";
  private search_url_prefix: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/readersubscriptionBookContent/";

  constructor(private http: HttpClient) { }

  findBookContent(userName: String, bookId: number,authorToken: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + authorToken);
    var url = this.search_url_prefix + userName + "/" + bookId;
    console.log("Created Create URL : ", this.search_url_prefix)
    return this.http.get(url, { 'headers': headers });
  }

  

}
