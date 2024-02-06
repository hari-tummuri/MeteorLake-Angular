import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  path !: any;
  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    this.path = this.route.snapshot.params['path'];
    console.log(this.path)
  }

  messages = [
    { user: "Law Agent", text: "Hi, how are you?" },
    { user: "User", text: "Hello" },
    // Add more messages for initial chat history
  ];
  newMessage = "";

  sendMessage() {
    this.messages.push({ user: "User", text: this.newMessage });

    this.newMessage = "";
  }
}
