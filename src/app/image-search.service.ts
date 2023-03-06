import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { GoogleParameters } from 'serpapi';
import { getJson } from 'serpapi';

@Injectable({
  providedIn: 'root',
})
export class ImageSearchService {

  // headers = new HttpHeaders({
  //   'x-rapidapi-host': 'google-search72.p.rapidapi.com',
  //   'x-rapidapi-key': '1a021b7bd1msh1848d81ce7cf30fp1b122fjsnc7ba1f8e0cae'
  // });
  

  // constructor(private http: HttpClient) {}

  // // Show result as JSON
  // getImages(val: string) {
  //   return this.http.get<any>(`https://google-search72.p.rapidapi.com/imagesearch?query=${val}&num=2`, {
  //       headers: this.headers
  //     });
  // }

  headers = new HttpHeaders({
    'x-rapidapi-host': 'seo-api.p.rapidapi.com',
    'x-rapidapi-key': '1a021b7bd1msh1848d81ce7cf30fp1b122fjsnc7ba1f8e0cae'
  });
  

  constructor(private http: HttpClient) {}

  // Show result as JSON
  getImages(val: string) {
    return this.http.get<any>(`https://seo-api.p.rapidapi.com/v1/image/q=${val}`, {
        headers: this.headers
      });
  }
}
