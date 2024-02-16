import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  users : User[] = [{"email" : "naveen@gmail.com", "password": "Demo123", "profileName":"Naveen", "profileimage": "https://media.licdn.com/dms/image/C4E03AQErNeIsqNvsmA/profile-displayphoto-shrink_800_800/0/1626780671355?e=2147483647&v=beta&t=kDF_HBtmb1RKMgnwak2-p8HNiU2dBe1wd2di_Y3-QFE", "won": 50, "loss": 10, "inProgress":7 },
  {"email" : "abhijeet.kadam@wipro.com", "password": "Abhijeet123", "profileName":"Abhijeet", "profileimage": "https://media.istockphoto.com/id/503040171/photo/middle-eastern-businessman-portrait.jpg?s=612x612&w=0&k=20&c=7t6c_HQHfUZNgrVtR-G1rQpJAMaCbFsuxppDRKBnXDw=", "won": 55, "loss": 11, "inProgress":15 }
]
  constructor() { }

  getUserByEmailAndPsssword(email : string, password: string){
     return this.users.find((user) => user.email === email && user.password === password);
  }

  getUserByEmail(email : string){
    return this.users.find((user) => user.email === email)
  }
}
