import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from 'src/app/AgentReply';
import { CasesService } from 'src/app/services/cases.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
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
    { user: "Law Agent", text: "Hi, You can ask your queries related to uploaded document" },
    // { user: "User", text: "Hello" },
    // Add more messages for initial chat history
  ];
  newMessage = "";

  sendMessage() {
    this.messages.push({ user: "User", text: this.newMessage });
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
