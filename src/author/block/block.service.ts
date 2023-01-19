import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorPayload } from 'src/models/author.payload';


@Injectable({
  providedIn: 'root'
})
export class BlockService {

  //private author_url = authorurl.url;
  // private block_url: string = "http://localhost:8083/author/blockBook/";
  // private unblock_url: string = "http://localhost:8083/author/unblockBook/";
  // private my_books_url: string =  "http://localhost:8083/getBooks/"
  private block_url: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/author/blockBook/";
  private unblock_url: string = "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/author/unblockBook/";
  private my_books_url: string =  "http://ec2-3-111-186-132.ap-south-1.compute.amazonaws.com:8083/getBooks/"
  constructor(private http: HttpClient) { }

  blockBook(authorName: String, bookId: number,authorToken: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + authorToken);
    var url = this.block_url + authorName + "/" + bookId;
    console.log("Created Create URL : ", this.block_url)
    return this.http.put(url, {},{ 'headers': headers });
  }
  unblockBook(authorName: String, bookId: number,authorToken: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + authorToken);
    var url = this.unblock_url + authorName + "/" + bookId;
    console.log("Created Create URL : ", this.block_url)
    return this.http.put(url, {},{ 'headers': headers });
  }
  getAllBooksForAuthor(authorName: string, authorToken: string) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + authorToken);
    // var url = this.my_books_url + authorName; 
     //console.log("url",url)
    let getUserBookUrl: string =this.my_books_url+authorName;
    console.log("url",getUserBookUrl)
    return this.http.get(getUserBookUrl, { 'headers': headers })
  }
}
