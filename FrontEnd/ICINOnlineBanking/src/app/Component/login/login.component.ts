import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
  {
  userName!: string;
  password!: string;
  msg: string = "";
  constructor(private router: Router,
    private logServ:UserService) {
    //sessionStorage.removeItem("user");
    sessionStorage.clear();
  }
  ngOnInit(): void {
    sessionStorage.clear();
  }
  CheckUserDetails() {
    if (this.userName == "admin" && this.password == "admin@123") {
      sessionStorage.setItem('user', this.userName.toString());
      //isNavbarVisiableAdmin:boolean=false;

    }
    else {
      this.logServ.getUserByUserName(this.userName).subscribe((res) => {
        console.log(res);
        const user = res;
        if (user) {
          if (user.password == this.password) {           
            sessionStorage.setItem('user', this.userName.toString());
            console.log(sessionStorage.setItem("userAccount",user.bankAccount[0].accountNumber));
            sessionStorage.setItem("userAccount",user.bankAccount[0].accountNumber);
            console.log(user);            
            sessionStorage.setItem("user", user.userName);           
            const previousUrl = sessionStorage.getItem("previousUrl");           
            if (previousUrl != null) {
              this.router.navigate([previousUrl]);
            }
            else {              
              this.router.navigate(['/userhome']);
            }
          }
          else {            
            this.msg = ("Please check username/password");
          }
        }
        else {
          this.msg = "This is not registered username.plz register";
        }
      });
    }
  }
}

