import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatasenderService {

  constructor(private http: HttpClient) {   
  }

  send(data: any ){
    console.log(data);
  }

  httpSend(data: any){

    let url = 'http://localhost:3000/posts';

    this.http.post(url, data).toPromise().then((data: any) => {
      console.log(data); 
    });
  }
}
