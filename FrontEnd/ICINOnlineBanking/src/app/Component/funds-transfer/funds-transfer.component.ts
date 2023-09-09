import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

enum AccountStatus {

	AVAILABLE="AVAILABLE",
  INVALID="INVALID",
  NOTKNOW="NOTKNOW"
}
enum TrasactionStatus{
  SUCCESS="SUCCESS",FAILURE="FAILURE"
}
@Component({
  selector: 'app-funds-transfer',
  templateUrl: './funds-transfer.component.html',
  styleUrls: ['./funds-transfer.component.css']
})
export class FundsTransferComponent implements OnInit{
  isSameBank:boolean=true;
  msg:string="";

  userAccountList:any;

  constructor(private builder:FormBuilder,
    private userService: UserService){}
  ngOnInit(): void {
    const userName=sessionStorage.getItem("user");
    this.userService.getUserAccountDetails(userName).subscribe(res=>{
      this.userAccountList=res;
      console.log(this.userAccountList);
    })
    

  }
  intraTransferForm=this.builder.group({
    fromAccount:this.builder.control('',Validators.required),
    toAccountNumber:this.builder.control('',[Validators.required,Validators.minLength(15)]),
    toAccountName:this.builder.control('',Validators.required),
    amount:this.builder.control('',[Validators.required,Validators.min(1)]),
    transactionType:this.builder.control("",Validators.required),
    toIfscCode:this.builder.control("",Validators.required)

  })
  saveTransaction(transferForm:any)
  {
    //const accountNumber=this.intraTransferForm.value.toAccount;
    const ifscCode=this.intraTransferForm.value.toIfscCode;
    console.log(this.intraTransferForm.value.toAccountNumber);
    console.log(this.intraTransferForm.value.toIfscCode);
    this.userService.getBenificiaryAccountDetails(this.intraTransferForm.value.toAccountNumber,this.intraTransferForm.value.toIfscCode).subscribe(data=>{
      console.log(data);
      if(data==AccountStatus.AVAILABLE)
     {
      
      this.userService.TranferAmountAndSave(this.intraTransferForm.value.fromAccount,this.intraTransferForm.value.toAccountNumber,
        this.intraTransferForm.value.amount).subscribe(status=>{
          alert(status);
        if(status==TrasactionStatus.SUCCESS)
        {
          this.isSameBank=false;
          this.msg="Transaction completed successfully"
          alert("Transaction completed successfully");

        }
        else
        {
          alert("OOPs!!Transaction is not completed ");
        }
      })
     }
     else if(data==AccountStatus.INVALID)
     {
      alert("Please enter proper values");
     }
     else
     {
      alert("OOPs something went wrong");
     }
    });
   
  }

}
