import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageSearchService {

  headers = new HttpHeaders({
    'x-rapidapi-host': 'seo-api.p.rapidapi.com',
    'x-rapidapi-key': '1a021b7bd1msh1848d81ce7cf30fp1b122fjsnc7ba1f8e0cae'
  });

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
