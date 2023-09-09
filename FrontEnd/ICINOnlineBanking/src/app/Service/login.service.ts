import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user!:Observable<User>;
  constructor() {
     user:User; 
   }

  getUserByUserName(userName: string):Observable<any> {
    //return new Object();
    return this.user;
    
  }

}
