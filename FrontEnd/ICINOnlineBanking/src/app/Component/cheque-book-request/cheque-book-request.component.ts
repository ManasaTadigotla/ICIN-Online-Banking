import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-cheque-book-request',
  templateUrl: './cheque-book-request.component.html',
  styleUrls: ['./cheque-book-request.component.css']
})
export class ChequeBookRequestComponent {
  showChequeForm: boolean=true;

  constructor(private userService:UserService,
    private builder:FormBuilder,
   ){}
  msg:string="";
  userAccountList:any;
  errorOrSuccess:string="error";
  

  requestChequeBookForm=this.builder.group({
    accountNumber:this.builder.control('',Validators.required),
    accountHolderName:this.builder.control('',Validators.required),
    toIfscCode:this.builder.control('',Validators.required),
    branch:this.builder.control('',Validators.required)
  })

  ngOnInit(): void {
    const userName=sessionStorage.getItem("user");
    this.userService.getUserAccountDetails(userName).subscribe(res=>{
      this.userAccountList=res;
      console.log(this.userAccountList);
    })
    

  }
 
  sendRequest(reqForm:any)
  {
    if(reqForm.valid)
    {
      this.userService.sendRequestForChequeBook(reqForm.value).subscribe(res=>{
        if(res!=null)
        {
          this.errorOrSuccess="success"
          this.msg="Request is saved successfully...";
          this.showChequeForm=false;
          //this.router.navigateByUrl("/userhome");
        }
        else
        {
          this.errorOrSuccess="error";
          this.msg="Request couldn't be saved.Plz try again..";
        }
      }
      )
    }
    else{
      this.errorOrSuccess="error";
      this.msg="Please enter valid details";
    }
  }
}
