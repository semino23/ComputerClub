import {  Injectable } from '@angular/core';
import { UserModel } from '../Models/UserModel';
import { HttpClient  , HttpParams , HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError, retry, Observable } from 'rxjs';
import { ProjectModel } from '../Models/Project';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http:HttpClient , private cookieService:CookieService , private userService:UserService) { }
rootUrl = ""

GetProjectList():Observable<ProjectModel>{
let ProjectList = this.http.get<ProjectModel>(this.rootUrl + "")
return ProjectList;
}

PostProject(project:ProjectModel){
  if(this.userService.AuthUser()){
    let cookie = this.cookieService.get("u-auth");
    let Param = new HttpParams().append("cookie" , cookie)
      this.http.put(this.rootUrl+"",project,{params:Param}).pipe(retry(1),map((res)=>console.log(res)),catchError(async()=>ErrorHandler()))
    }else{alert("You dont have the permission")}
  
}

GetProject(name:string):Observable<ProjectModel>{
let Param = new HttpParams().append("name" , name)
console.log("I got Params " +Param)
let Project = this.http.get<ProjectModel>(this.rootUrl + "" , {params:Param})
return Project;
}

UpdateProjectDetails(name:string , newDetails:ProjectModel){

if(this.userService.AuthUser()){
let cookie = this.cookieService.get("u-auth");
let Param = new HttpParams().append("name" , name).append("cookie" , cookie)
  this.http.put(this.rootUrl+"",newDetails,{params:Param}).pipe(retry(1),map((res)=>console.log(res)),catchError(async()=>ErrorHandler()))
}else{alert("You dont have the permission")}

}
}
let ErrorHandler = () => {
  return new Error("something went wrong")
}