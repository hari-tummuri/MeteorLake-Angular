import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  homeStatus !: boolean
  profileImage : any = localStorage.getItem('profileimage')
  constructor(private router : Router){}
  ngOnInit(): void {
    if(localStorage.getItem('page') == 'chat'){
      this.homeStatus = true
    } else{
      this.homeStatus = false
    }


  }
  currentDate : Date = new Date()

  logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('password')
    localStorage.removeItem('won')
    localStorage.removeItem('loss')
    localStorage.removeItem('inProgress')
    localStorage.removeItem('profileimage')
    localStorage.removeItem('caseno')
    localStorage.removeItem('page')
    this.router.navigate(['/'])
  }

  goToHome(){
    this.router.navigate(['/profile'])
  }

}
