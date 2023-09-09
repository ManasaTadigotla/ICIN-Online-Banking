import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../Config/app-settings';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addNewUser(user:any)
  {
   return this.http.post<any>(AppSettings.baseUrl+"newuser",user);
  }
  checkUserName(userName:string)
  {
    return this.http.get<any>(AppSettings.baseUrl+"checkUserName/"+userName);
  }

  savePassword(userName:any,password:any)
  {
    return this.http.get<any>(AppSettings.baseUrl+"updatepassword/"+userName+"/"+password);
  }

getUserByUserName(userName:any)
{
  return this.http.get<any>(AppSettings.baseUrl+"user/"+userName);
}

  getTransactionByUser(accountNumber:Number)
  {
    return this.http.get<any>(AppSettings.baseUrl+"alltransactions/"+accountNumber);
  }

  getTopTransactions(accountNumber:Number,noOfTransactions:number)
  {
    return this.http.get<any>(AppSettings.baseUrl+"toptransactions/"+accountNumber+"/"+noOfTransactions);
  }

  getUserAccountDetails(userName:any)
  {
    return this.http.get<any>(AppSettings.baseUrl+"useraccountdetails/"+userName);
  }

  getBenificiaryAccountDetails(accountNumber:any,ifscCode:any)
  {
    return this.http.get<any>(AppSettings.baseUrl+"checkuseraccount/"+accountNumber+"/"+ifscCode);
  }
////////TRANSACTION////////////

TranferAmountAndSave(fromAccount:any,toAccount:any,amount:any)
{
  return this.http.get<any>(AppSettings.baseUrl+"maketransaction/"+fromAccount+"/"+toAccount+"/"+amount);
}

//////////ChequeBook Request//////////
sendRequestForChequeBook(requestdetailsForm:any)
{
  return this.http.post<any>(AppSettings.baseUrl+"checkbookrequest",requestdetailsForm);
}


}
