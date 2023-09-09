import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ChequeBookRequestComponent } from './Component/cheque-book-request/cheque-book-request.component';
import { FundsTransferComponent } from './Component/funds-transfer/funds-transfer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import{FormsModule} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Component/home/home.component';
import { UserHomeComponent } from './Component/user-home/user-home.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './Component/menu/menu.component';
import { HelpComponent } from './Component/help/help.component';
import { ContactComponent } from './Component/contact/contact.component';
import { ChangePasswordComponent } from './Component/change-password/change-password.component';
import { ServicesComponent } from './Component/services/services.component';
import { EStatementComponent } from './Component/e-statement/e-statement.component';
import { RewardsComponent } from './Component/rewards/rewards.component';
//import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ChequeBookRequestComponent,
    FundsTransferComponent,
    HomeComponent,
    UserHomeComponent,
    MenuComponent,
    HelpComponent,
    ContactComponent,
    ChangePasswordComponent,
    ServicesComponent,
    EStatementComponent,
    RewardsComponent,
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
