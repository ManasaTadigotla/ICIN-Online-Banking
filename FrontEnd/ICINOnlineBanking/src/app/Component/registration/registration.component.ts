import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private builder:FormBuilder,
    private userServ:UserService,
    //private loginServ:LoginService,
    private router:Router ) { }


  NewUser=this.builder.group({
    name:this.builder.control('',[Validators.minLength(5),Validators.required]),    
    email :this.builder.control('',[Validators.required,Validators.email]),
    phone :this.builder.control('',[Validators.minLength(10),Validators.required]),
    userName:this.builder.control('',[Validators.minLength(5),Validators.required]),
    password:this.builder.control('',[Validators.minLength(5),Validators.required]),
    address: new FormGroup({
      streetAddress: new FormControl('', [
        Validators.required,
        Validators.minLength(5)          
      ]),
      city: new FormControl('', Validators.required),
      pincode: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ])
     
  })
  })
   
  createUser(regForm:any)
  {
    let isExists:boolean;
    console
    this.userServ.checkUserName(regForm.value.userName).subscribe(res=>{
      isExists=res;

      console.log(res);
      if(!isExists)
    {
      this.userServ.addNewUser(regForm.value).subscribe(data=>{
        if(data!=null)
        {
          alert("Registered successfully...")
          this.router.navigateByUrl("/login");
        }
      });
    } 
    else
    {
      alert("This User name is already registered!! Please provide other")
    }
  
    })
    
    
  }
 

  
}
