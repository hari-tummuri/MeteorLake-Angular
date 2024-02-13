import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  // summary : string[]

  constructor(private http : HttpClient) { }

  // getSummary(path : any){
  //   return
  // }

  getSummaryByPath(formdata : FormData) {
    return this.http.post(`http://127.0.0.1:4000/summary`, formdata);
  }
}
