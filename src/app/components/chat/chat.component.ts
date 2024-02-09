import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from 'src/app/AgentReply';
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

  constructor(private route: ActivatedRoute, private chatService : ChatService, private sanitizer : DomSanitizer ){}
  ngOnInit(){
    // this.path = this.route.snapshot.params['path'];
    localStorage.setItem('page','chat')
    console.log(this.doc_path);
    // this.newpath=this.sanitizer.bypassSecurityTrustResourceUrl(this.doc_path);
    // (<HTMLIFrameElement>document.getElementById('doc')).src = this.doc_path;
    // this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.doc_path);
    this.newpath = this.sanitizer.bypassSecurityTrustResourceUrl(this.doc_path);
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
    this.messages.push({user : "Agent", text: this.agent})

    this.newMessage = "";
  }

  getReply(question : any){
    this.chatService.getReply(question).subscribe({
      next: (response: any) => {
        this.agent = response['Answer']
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
