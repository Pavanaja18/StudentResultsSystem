import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
	public loginForm!: FormGroup
  id:any;
  myDetails:any;
  mySubscription: Subscription = new Subscription;
  //injecting faketest service object
  
  
  
  constructor(private formBuilder: FormBuilder , private http: HttpClient, private router: Router) { }
  
  ngOnInit() : void{
    this.loginForm = this.formBuilder.group(
      {
        id:['',Validators.required],
        password:['',Validators.required]
      }
    )
  }
  login() {
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user =res.find((a:any)=>{
        //console.log(a.id,a.password, this.loginForm.value.id,this.loginForm.value.password);
        this.id=this.loginForm.value.id;
        return a.id=== this.loginForm.value.id && a.password===this.loginForm.value.password
        //console.log(a.id,this.loginForm.value.id);
      });
      if(user)
      {
        console.log(user);
        alert("Login Successfull");
        this.loginForm.reset();
        
        this.router.navigateByUrl("users/"+user.id)
        console.log("value in login component is",user.id)

         
        
      }
      else{
        console.log(user);
        alert("User Not Found");
      }
    },err=>{
      alert("Something went Wrong!");
    })
  }

}

