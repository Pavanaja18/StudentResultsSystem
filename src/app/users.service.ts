import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable,pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private hc:HttpClient) { }
 //to get details from the database
 // getDetails():Observable<any>{
 //   return this.hc.get<any>('http://localhost:3000/users');
 // } 
 headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json') ;

 httpOptions={
   headers : this.headers
 }
url:string ="http://localhost:3000/users";
  getDetails(){
    return this.hc.get<any>("http://localhost:3000/users")
    .pipe(map((res:any)=>{
      return res;
    }))
  } 
  
  
  getDetailsById(id: any):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/users/'+id);
  } 
  
  deleteStudent(id: any){
    return this.hc.delete<any>('http://localhost:3000/users/'+id);
    
  }
  updateDetailsById(id:any):Observable<any>{
    const url=`${this.url}/${id}`;
    return this.hc.put<any>(url,this.httpOptions);
  }

  getDetailsAdmin(){
    return this.hc.get<any>("http://localhost:3000/admin")
    .pipe(map((res:any)=>{
      return res;
    }))
  } 
}
