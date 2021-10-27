import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { Subscription} from 'rxjs';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  
  myDetails: any;
  mySubscription: Subscription = new Subscription;
  selectedClass: string = '';
  class:any;
  id!: number;
  name!:string;
  cl1!:string;
  //injecting faketest service object
  
  public addStudent!: FormGroup
  public delStudent!:FormGroup

  modalRef: MDBModalRef = new MDBModalRef;
  

  constructor( private modalService: MDBModalService,private formBuilder: FormBuilder,private http: HttpClient , private fsObj:UsersService,private router:Router) {}
  
  ngOnInit(): void {
    this.fsObj.getDetails().subscribe((response)=>{
      this.myDetails=response;
    })

    this.addStudent=this.formBuilder.group({
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
    })

    this.delStudent=this.formBuilder.group({
      id:[''],
      
    })

    
  }
  

 
  deleteStudent(id: any){
    console.log(id);
    if(confirm("Are you sure you want to delete?"))
    {
      this.fsObj.deleteStudent(id).subscribe((res)=>{
        alert("Student deleted successfully");
        this.ngOnInit();
      })
    }
    
  }
  Search()
  {
    if(this.class=="")
      {
        this.ngOnInit();
      }
      else
      {
        this.myDetails =this.myDetails.filter((res:any)=>{
          return res.class.toLowerCase().match(this.class.toLowerCase());
        });
      }
  }

  add() {
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user =res.find((a:any)=>{
        //console.log(a.id,a.password, this.loginForm.value.id,this.loginForm.value.password);
        this.id=this.addStudent.value.id;
        return a.id=== this.addStudent.value.id && a.password===this.addStudent.value.password
        //console.log(a.id,this.loginForm.value.id);
      });
      if(user)
      {
        console.log(user);
        alert("User already Exists!");
        this.addStudent.reset();
        
        //this.router.navigateByUrl("users/"+user.id)
        console.log("value in login component is",user.id)
        
      }
      else{
        this.http.post<any>("http://localhost:3000/users",this.addStudent.value)
    .subscribe(res=>{
      alert("Successfully Added!");
      this.addStudent.reset();
    },
    err=>{
      alert("Something went wrong");
      })
      }
    },err=>{
      alert("Something went Wrong!");
    })
  }

}
