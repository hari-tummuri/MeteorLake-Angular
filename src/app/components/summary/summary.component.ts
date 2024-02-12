import { Data } from './../../SummaryData';
import { Component } from '@angular/core';
import { CasesService } from 'src/app/services/cases.service';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  isUploading = false;
  uploadProgress = 0;
  selectedFilePath : string = 'D:\\LegalDocuments\\'
  summary !: string
  data !: Data
  formData = new FormData()

  constructor(private summaryService : SummaryService, private caseService : CasesService){}

  onFileSelected(event : any) {
    const file: File = event.target.files[0];

    if (file) {
      this.isUploading = true;
      this.uploadProgress = 20;  // Update as per your requirement
      // const formData = new FormData()
        this.formData.append('file',file)

      // Simulate a file upload
      setTimeout(() => {
        this.isUploading = false;
        this.uploadProgress = 0;
        this.selectedFilePath += file.name;  // Store file path
        console.log(this.selectedFilePath);
      }, 1000);
    }

    this.getSummary(this.formData)
  }

  getSummary(formdata : FormData){
    // this.data ={ doc_path : path }
    this.summaryService.getSummaryByPath(formdata).subscribe({
      next: (response: any) => {
        this.summary = response
        console.log(this.summary);
        
      },
      error: (error: any) => {
        console.log();
      },
    }
    );
  }

  getSummaryStatic(path : any){
    this.summary = this.caseService.getSummaryStatic()
  }

}
