// import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from 'src/app/AgentReply';
import { Loadcase } from 'src/app/LoadCase';
import { Question } from 'src/app/Question';
import { CasesService } from 'src/app/services/cases.service';
import { ChatService } from 'src/app/services/chat.service';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  // animations:[trigger('isLoading',[state('start',style({opacity : 1, transform : 'scale(1.0)'})),state('end',style({opacity : 0, transform : 'scale(0.0)'})), transition('start <=> end', animate('500ms ease-in-out'))])]

})
export class ChatComponent implements OnInit {

  path !: any;
  newpath !: any
  agent !: string;
  caseno : any = localStorage.getItem('caseno')
  doc_path : string = "assets/documents/"+this.caseno+".pdf"
  sumDoc : string = "document"
  urlSafe !: SafeResourceUrl;
  summary !: any;
  loading : boolean = false
  caseId !: Loadcase




  constructor(private route: ActivatedRoute, private chatService : ChatService, private sanitizer : DomSanitizer, private caseService : CasesService ){}
  ngOnInit(){
    // this.path = this.route.snapshot.params['path'];
    localStorage.setItem('page','chat')
    // localStorage.getItem('caseno')
    console.log(this.doc_path);
    // this.newpath=this.sanitizer.bypassSecurityTrustResourceUrl(this.doc_path);
    // (<HTMLIFrameElement>document.getElementById('doc')).src = this.doc_path;
    // this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.doc_path);
    this.newpath = this.sanitizer.bypassSecurityTrustResourceUrl(this.doc_path);
    this.caseId = {'caseId' : this.caseno }
    this.loadCase(this.caseId)
    this.getSummaryByCaseno()
  }

  messages = [
    { user: "Agent", text: "Hi, You can ask your queries related to uploaded document" },
    // { user: "User", text: "Hello" },
    // Add more messages for initial chat history
  ];
  newMessage = "";

  sendMessage() {
    this.messages.push({ user: "User", text: this.newMessage });
    this.loading = true
    const query : Question = {'caseId': this.caseno, 'query': this.newMessage}
    this.getReply(query)
    // this.messages.push({user : "Agent", text: this.agent})

    this.newMessage = "";
  }

  getSummaryByCaseno( ){
    this.summary = this.caseService.getSummaryStatic()
    console.log(this.summary);

  }
  getReply(question : Question){
    this.chatService.getReply(question).subscribe({
      next: (response: any) => {
        this.loading = false
        this.agent = response['response']
        console.log('Response:', this.agent);
      this.messages.push({ user: "Agent", text: this.agent });
      },
      error: (error: any) => {
        console.log();
      },
    })
  }

  viewSummary(){
    // localStorage.setItem('sumDoc', 'summary')
    this.sumDoc = 'summary'
  }

  viewDocument(){
    // localStorage.setItem('sumDoc','document')
    this.sumDoc = 'document'
  }

  loadCase( caseId : Loadcase){
    this.chatService.loadCase(caseId).subscribe({
      next: (response : any ) =>{
        console.log('case document loaded');

      },
      error: (error : any) =>{
        console.log(error);

      },
    });
  }
}
