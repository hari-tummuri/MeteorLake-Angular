// import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from 'src/app/AgentReply';
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
    this.getReply(this.newMessage)
    // this.messages.push({user : "Agent", text: this.agent})

    this.newMessage = "";
  }

  getSummaryByCaseno(){
    this.summary = this.caseService.getSummaryStatic()
    console.log(this.summary);

  }
  getReply(question : any){
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
}
