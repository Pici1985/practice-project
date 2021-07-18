import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatagetterService {

  constructor(private httpClient: HttpClient) { 
  }

  getPosts(){
    return this.httpClient.get('http://localhost:3000/posts');   
  };
}
