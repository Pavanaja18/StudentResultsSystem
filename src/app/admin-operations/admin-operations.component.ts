import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router, ActivatedRoute} from '@angular/router';
import { FormControl, NgForm } from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-admin-operations',
  templateUrl: './admin-operations.component.html',
  styleUrls: ['./admin-operations.component.css']
})
export class AdminOperationsComponent implements OnInit {
  public updateStudent!: FormGroup
  id:any;
  myDetails:any;
  mySubscription: Subscription = new Subscription;
  constructor(private formBuilder: FormBuilder , private http: HttpClient, private router: Router,private ar:ActivatedRoute,private fs:UsersService) { }

  ngOnInit(): void {

    

    this.updateStudent = this.formBuilder.group(
      {
        id:['',Validators.required],
      password:['',Validators.required],
      name:['',Validators.required],
      class:['',Validators.required],
      
      English:['',Validators.required],
      Maths:['',Validators.required],
      Science:['',Validators.required],
      Social:['',Validators.required],
      Hindi:['',Validators.required],
      attendance:['',Validators.required],
      feedback:['',Validators.required],
      faculty:['',Validators.required],
      contact:['',Validators.required]
        
      }
    )

   console.log("id is ",this.ar.snapshot.params.id);
  }

update(){
  console.log("id is ",this.ar.snapshot.params.id);
  this.fs.updateDetailsById(this.ar.snapshot.params.id)
  .subscribe((res:any)=>
  {
    console.log(res);
    this.updateStudent=new FormGroup({
      id : new FormControl(res['id']),
      name: new FormControl(res['name'])
    })
  })
}

}