import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {

  constructor(private router : Router, private signInService : SigninService){}


  email !: string
  password !: string
  user !: any
// name : string = "hari"
//    click():void{
//     alert("hello")
//   }

//  printHello(): void {
//   alert("hi")
// }

  signIn(){
    this.user = this.signInService.getUserByEmailAndPsssword(this.email, this.password)
    // console.log(this.user)
    localStorage.setItem('email', this.user.email);
    localStorage.setItem('username', this.user.profileName);
    localStorage.setItem('password',this.user.password)
    localStorage.setItem('won',this.user.won)
    localStorage.setItem('loss',this.user.loss)
    localStorage.setItem('inProgress',this.user.inProgress)
    localStorage.setItem('profileimage',this.user.profileimage)
    this.after_submit()
  }
  after_submit(): void{
    this.router.navigate(['/profile'])
  }

}
