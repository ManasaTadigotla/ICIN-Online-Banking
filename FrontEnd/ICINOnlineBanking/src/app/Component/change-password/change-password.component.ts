import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{
 
  oldPassword!: string;
  newPassword!: string;
  confirmNewPassword!: string;
  userName!:string;

  constructor(private router:Router,
    private userService:UserService){}

  ngOnInit(): void {
    
    
  }
  savePassword()
  {
    if(this.newPassword==this.confirmNewPassword)
    {
      if(sessionStorage.getItem("user")==null)
    {
      alert("Session expired.Please login");
      this.router.navigateByUrl("/login");
    }
    else
    {
      const userName=sessionStorage.getItem("user");
      console.log(userName);
      this.userService.savePassword(userName,this.newPassword).subscribe(res=>{
        console.log(res);
        if(res==1)
        {
          alert("Password changed successfully");
          this.router.navigateByUrl("/login");
        }
      })
    }
     
    }
  }
}
