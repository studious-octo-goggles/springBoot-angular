import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http:HttpClient) { }

  getDemo(){

    return this.http.get('/server/api/v1/Demo');
  }

  getOneDemo(id: number) {
    return this.http.get('/server/api/v1/Demo' + id);
    
  }

  createDemoRegistration(demo){

    let body = JSON.stringify(demo);
    return this.http.post('/server/api/v1/Demo', body, httpOptions);
  }
}
 