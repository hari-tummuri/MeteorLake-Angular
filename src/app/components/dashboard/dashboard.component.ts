import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cases } from 'src/app/Case';
import { Path } from 'src/app/Path';
import { CasesService } from 'src/app/services/cases.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  // currentDate: string = "5 February 2024";
  constructor (private caseService : CasesService, private router : Router){}
  ngOnInit(){
    localStorage.setItem('page','dashboard')
    this.filteredData =this.caseService.getCases()
    this.cases  = this.caseService.getCases()
    console.log(this.filteredData)
  }

  //  cases : Cases[] = [
  //   { "caseno": 15783, "lawyer": "John Doe", "casetype": "Civil law", "judge": "Fathima Beevi", "status": "closed"},
  //   { "caseno": 27586, "lawyer": "Jane Smith", "casetype": "Criminal law", "judge": "Anna Chandy", "status": "closed"},
  //   { "caseno": 34754, "lawyer": "Michael Johnson", "casetype": "Family law", "judge": "Ranjan Gogoi", "status": "closed"},
  //   { "caseno": 40937, "lawyer": "Emily Brown", "casetype": "Employment law", "judge": "Chief Justice Dhananjaya Y. Chandrachud", "status": "next hearing"},
  //   { "caseno": 50976, "lawyer": "David Lee", "casetype": "Family law", "judge": "Justice Bhushan Ramkrishna Gavai", "status": "closed"},
  //   { "caseno": 61254, "lawyer": "Sarah Wilson", "casetype": "Civil law", "judge": "Kashinath Trimbak Telang", "status": "dismissal of suit"},
  //   { "caseno": 78979, "lawyer": "James Taylor", "casetype": "Criminal law", "judge": "Justice Surya Kant", "status": "dismissal of suit"},
  //   { "caseno": 88657, "lawyer": "Emma Martinez", "casetype": "Employment law", "judge": "Kashinath Trimbak Telang", "status": "closed"},
  //   { "caseno": 94536, "lawyer": "Daniel Harris", "casetype": "Employment law", "judge": "Justice Bhushan Ramkrishna Gavai", "status": "dismissal of suit"},
  //   { "caseno": 10456, "lawyer": "Olivia Garcia", "casetype": "Family law", "judge": "Justice Surya Kant", "status": "case dismissed"}
  // ]

  selectedCase : Cases = { "caseno": "", "lawyer": "", "casetype": "", "judge": "", "status": "","summary":""}
  cases :any[] = [];
  filteredData: any[] = [] ;
  filterCriteria: any = {};
  // path !: Path
  path : any = "assets/documents/Sample_doc.pdf"

  applyFilter() {
    this.filteredData = this.cases.filter((item: { casetype: any; lawyer: any; judge: any; caseno: any; }) => {
      return (
        (!this.filterCriteria.casetype || item.casetype.toLowerCase().includes(this.filterCriteria.casetype.toLowerCase().trim())) &&
        (!this.filterCriteria.lawyer || item.lawyer.toLowerCase().includes(this.filterCriteria.lawyer.toLowerCase().trim())) &&
        (!this.filterCriteria.judge || item.judge.toLowerCase().includes(this.filterCriteria.judge.toLowerCase().trim())) &&
        (!this.filterCriteria.caseno || item.caseno.toLowerCase().includes(this.filterCriteria.caseno.toLowerCase().trim()))
      );
    });
  }

  getPDF(id: any){
    this.caseService.getCasesById(id).subscribe({
      next: (response: any) => {
        this.path = response
      },
      error: (error: any) => {
        console.log();
      },
    }
    );

    // this.openChat(this.path['path'])
  }

  // openChat(path : any){
  //   this.router.navigate(['/chat',path]);
  // }
  openChat(caseno : any){
    localStorage.setItem('caseno', caseno)
    localStorage.setItem('doc_path',"assets/documents/Sample_doc.pdf")
    this.router.navigate(['/chat'])
  }
}
