import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit  {
  title = 'internshipProject';
   
  
  constructor(/*private fsObj:FaketestService, */private router:Router) { }
  ngOnInit(): void {
  }

  //btnClick= function () {
  //  this.router.navigateByUrl('/StudentResults');
//}; 
}
