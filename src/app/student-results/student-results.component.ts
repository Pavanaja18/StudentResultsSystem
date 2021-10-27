import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-student-results',
  templateUrl: './student-results.component.html',
  styleUrls: ['./student-results.component.css']
})
export class StudentResultsComponent implements OnInit {
  usersObj:any;

  constructor(private ar:ActivatedRoute,private fs:UsersService) { }
  ngOnInit() : void {

    let id=this.ar.snapshot.params.id;
    console.log(id);

    //get data of users with respective id
    this.fs.getDetailsById(id).subscribe(
      obj=>{
        this.usersObj=obj;
        console.log("new",id);
      },
      err=>
      {
        console.log("err is",err);
      }
    )
  }

  
  
}
