import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataupdateService {

  constructor(private http: HttpClient) { }

  log(id:any){
    console.log(id);
  }
}
