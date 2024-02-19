import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loadcase } from '../LoadCase';
import { Question } from '../Question';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http : HttpClient) { }

  getReply(question : Question){
    return this.http.post(`http://127.0.0.1:8080/apiQuery`, question)
  }

  loadCase(caseId : Loadcase){
    return this.http.post('http://127.0.0.1:8080/apiCaseId', caseId)
  }
}
