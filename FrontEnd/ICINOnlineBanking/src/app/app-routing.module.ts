import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { UserHomeComponent } from './Component/user-home/user-home.component';
import { FundsTransferComponent } from './Component/funds-transfer/funds-transfer.component';
import { ChequeBookRequestComponent } from './Component/cheque-book-request/cheque-book-request.component';
import { ChangePasswordComponent } from './Component/change-password/change-password.component';
import { ContactComponent } from './Component/contact/contact.component';
import { EStatementComponent } from './Component/e-statement/e-statement.component';
import { RewardsComponent } from './Component/rewards/rewards.component';
import { RegistrationComponent } from './Component/registration/registration.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
 {path:"userhome",component:UserHomeComponent},
 {path:"fundstransfer",component:FundsTransferComponent},
 {path:"changepassword",component:ChangePasswordComponent},
 {path:"contact",component:ContactComponent},
 {path:"requestchequebook",component:ChequeBookRequestComponent},
 {path:"estatement",component:EStatementComponent},
 {path:"rewards",component:RewardsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
