import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cases } from '../Case';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  cases : Cases[] = [
    { "caseno": "1024", "lawyer": "John Doe", "casetype": "Civil law", "judge": "Fathima Beevi", "status": "closed"},
    { "caseno": "2728", "lawyer": "Jane Smith", "casetype": "Criminal law", "judge": "Anna Chandy", "status": "closed"},
    { "caseno": "3243", "lawyer": "Michael Johnson", "casetype": "Family law", "judge": "Ranjan Gogoi", "status": "closed"},
    { "caseno": "3529", "lawyer": "Emily Brown", "casetype": "Employment law", "judge": "Chief Justice Dhananjaya Y. Chandrachud", "status": "next hearing"},
    { "caseno": "4120", "lawyer": "David Lee", "casetype": "Family law", "judge": "Justice Bhushan Ramkrishna Gavai", "status": "closed"},
    { "caseno": "6991", "lawyer": "Sarah Wilson", "casetype": "Civil law", "judge": "Kashinath Trimbak Telang", "status": "dismissal of suit"},
    { "caseno": "5871", "lawyer": "James Taylor", "casetype": "Criminal law", "judge": "Justice Surya Kant", "status": "dismissal of suit"},
    { "caseno": "4136", "lawyer": "Emma Martinez", "casetype": "Employment law", "judge": "Kashinath Trimbak Telang", "status": "closed"},
    { "caseno": "1771", "lawyer": "Daniel Harris", "casetype": "Employment law", "judge": "Justice Bhushan Ramkrishna Gavai", "status": "dismissal of suit"},
    { "caseno": "2031", "lawyer": "Olivia Garcia", "casetype": "Family law", "judge": "Justice Surya Kant", "status": "case dismissed"}
  ]


  constructor(private http : HttpClient) { }

  getCases() {
    return this.cases;
  }
  getCasesById(id: any) {
    return this.http.get(`http://127.0.0.1:8080/apiCaseId?caseId=${id}`);
  }
}
