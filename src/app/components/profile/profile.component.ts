import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarOptions,EventApi } from '@fullcalendar/core';
import { Calendar } from '@fullcalendar/core';
// import { EventRenderInfo } from '@fullcalendar/common';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import * as moment from 'moment';



// import { Component } from '@angular/core';
import { startOfDay, endOfDay } from 'date-fns';
import { SigninService } from 'src/app/services/signin.service';
import { User } from 'src/app/User';
import { SidebarComponent } from '../sidebar/sidebar.component';
// import { CalendarEvent } from 'mdb-calendar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  email : any = localStorage.getItem('email')
  username : any = localStorage.getItem('username')
  won : any = localStorage.getItem('won')
  loss : any = localStorage.getItem('loss')
  inProgress : any = localStorage.getItem('inProgress')
  profileImage : any = localStorage.getItem('profileimage')

  title !: any
  date !: any
  startTime !: any
  endTime !: any

  constructor(private route : ActivatedRoute, private router:Router,private signinService : SigninService){
    // sideBar.profileClicked()
  }
  openChat(numberr : any){
    localStorage.setItem('caseno', numberr)
    this.router.navigate(['/chat'])
  }
  ngOnInit(): void {
    localStorage.setItem('page','profile')
    // this.email = this.route.snapshot.params['email'];
    // console.log(this.email)
    // this.email = localStorage.getItem('email')
    // console.log(localStorage.getItem('email'))
    // this.getUserbyEmail()
  }

  // getUserbyEmail(){

  //   this.user = this.signinService.getUserByEmail(this.email)
  //   console.log(this.user)
  // }
    // casesWon = 50; // This can be any value from 0 to 100
    // casesLost = 7;
    public minDate: Date = new Date ("01/01/2000");
    public maxDate: Date = new Date ("01/01/2999");
    public value: Date = new Date ("05/16/2017");

    calendarOptions: CalendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, timeGridPlugin],
      eventClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
      events: [
        { title: 'civil case to go court', start: '2024-02-12T10:00:00', end: '2024-02-12T11:00:00' },
        { title: 'Meet with client', start: '2024-02-19T13:30:00', end: '2024-02-19T14:30:00' },
        {title: "Need to file counter to joe's money laundering case", start: '2024-02-16T10:00:00', end: '2024-02-16T11:00:00'},
        {title: 'Notery to be handover to client', start: '2024-02-14T11:00:00', end: '2024-02-14T12:30:00'}
      ]
    };

    handleDateClick(arg: any) {
      const startTime = moment(arg.event.start).format('h:mm A');
      const endTime = moment(arg.event.end).format('h:mm A');
      const date = moment(arg.event.start).format('DD-MM-YYYY')
      // alert('Event: ' + arg['event']['_def']['title'] + '\n Time : '+ startTime)
      this.title = arg['event']['_def']['title']
      this.startTime = startTime
      this.endTime = endTime
      this.date = date
      console.log(arg)
    }

    clearValues(){
      this.title = ''
      this.startTime = ''
      this.endTime = ''
      this.date = ''
    }
    // events: CalendarEvent[] = [
    //   {
    //     id: 'mdb-calendar-event-1',
    //     startDate: new Date(startOfDay(new Date())),
    //     endDate: new Date(endOfDay(new Date(2019, 2, 9))),
    //     name: 'Conference',
    //     color: 'info',
    //   },
    //   {
    //     id: 'mdb-calendar-event-2',
    //     startDate: new Date(startOfDay(new Date())),
    //     endDate: new Date(endOfDay(new Date())),
    //     name: 'Meeting',
    //     color: 'success'
    //   },
    // ];

    // generateUid() {
    //   const uid = Math.random().toString(36).substr(2, 9);
    //   return `mdb-calendar-event-${uid}`;
    // }

    // onEventAdd(event: CalendarEvent) {
    //   event.id = this.generateUid();
    //   this.events = [...this.events, event];
    // }
}
