import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ICINOnlineBanking';
  isLoggedIn: boolean=false;
  isNotLoggedIn: boolean=!this.isLoggedIn;
 isNavbarVisible: boolean=true;

 constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  
  
  ngDoCheck()
  {
    let currenturl = this.router.url; // it will give us, component link text which present in Address bar.
      console.log(currenturl);
    if(currenturl=="/userhome" || currenturl=="/fundstransfer"||currenturl=="/requestchequebook"||currenturl=="/changepassword")
    {
      if(sessionStorage.getItem("user")!=null)
      {
        //console.log(sessionStorage.getItem("user"));
        this.isLoggedIn=true;
        this.isNotLoggedIn=false;
      }
      else
      {
        alert("please login");
        this.router.navigateByUrl("login");
      }
     
    }
    
    
    
  }
}
