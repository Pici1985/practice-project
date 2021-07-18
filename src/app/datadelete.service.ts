import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatadeleteService {

  constructor(private http: HttpClient) {
  }
  
  log(id:any){
    console.log(id);
   //  kell egy delete request
  }
  delete(id:any){
    const deleteLine = 'http://localhost:3000/posts/' + id;
    console.log('line deleted');
    return this.http.delete(deleteLine);
  }
}
