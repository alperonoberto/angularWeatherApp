import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageSearchService {

  header = new HttpHeaders({
    'Client-ID': 'q5U6otkkALCbIzKAaJ4LxJjQH-oJ84qtgcHZ2u1jci8'
  })
  

  constructor(private http: HttpClient) {}

  // Show result as JSON
  getImages(val: string) {
    return this.http.get<any>(`https://api.unsplash.com/search/photos/?client_id=q5U6otkkALCbIzKAaJ4LxJjQH-oJ84qtgcHZ2u1jci8&query=${val}`, {
        headers: this.header
      });
  }
}
