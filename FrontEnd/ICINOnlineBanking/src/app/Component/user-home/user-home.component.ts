import { Component } from '@angular/core';
import { AppSettings } from 'src/app/Config/app-settings';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  balanceShown:boolean=false;
  balance:number=0;
  showtransactions:boolean=false;
  topTransactionsList:any;
  noOfTransactions=AppSettings.noOfTransactions;
  accountNumber!:any;

  constructor(private userService:UserService){}
  getBalance()
  {
    console.log(sessionStorage.getItem("user"));
    if(sessionStorage.getItem("user")!=null)
    {
      const userName=sessionStorage.getItem("user");
      this.userService.getUserByUserName(userName).subscribe(res=>{
        console.log(res);
        this.balance=res.bankAccount[0].balance;
        console.log(this.balance);
        this.balanceShown=!this.balanceShown;
      })
    }
  }

  LoadTopTransactions()
  {
    console.log(sessionStorage.getItem("userAccount"));
    if(sessionStorage.getItem("userAccount")!=null)
    {
      this.accountNumber=sessionStorage.getItem("userAccount");
      this.userService.getTopTransactions(this.accountNumber,this.noOfTransactions).subscribe(trans=>
        {
          console.log(trans);
          this.topTransactionsList=trans;          
          this.showtransactions=true;
        })
    }
    
  }
}
