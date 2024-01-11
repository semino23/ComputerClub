import {  Injectable } from '@angular/core';
import { UserModel } from '../Models/UserModel';
import { HttpClient  , HttpParams , HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError, retry, Observable, lastValueFrom } from 'rxjs';
import { ProjectModel } from '../Models/ProjectOverview';
import { UserService } from './user.service';
import { ProjectBlogListModel } from '../Models/BlogModels/ProjectBlogList';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http:HttpClient , private cookieService:CookieService , private userService:UserService) { }
private rootUrl = ""
//TODO: add caching
GetProjectBlogs(title:string):Observable<Array<ProjectBlogListModel>>{
let param = new HttpParams().append("blogTitle",title)
return this.http.get<Array<ProjectBlogListModel>>(this.rootUrl + "" , {params:param})
}

LikeProject(name:string , user:UserModel){
let param = new HttpParams().append("name", name).append("user" , JSON.stringify(user))
this.http.get(this.rootUrl =" " , {params:param})
}
//TODO: add caching
GetProjectList():Observable<Array<ProjectModel>>{
let ProjectList = this.http.get<Array<ProjectModel>>(this.rootUrl + "").pipe(catchError(async(err)=>ErrorHandler(err)))
return ProjectList;
}

PostProject(project:ProjectModel){
  if(this.userService.AuthUser()){
    let cookie = this.cookieService.get("u-auth");
    let Param = new HttpParams().append("cookie" , cookie)
      this.http.put(this.rootUrl+"",project,{params:Param}).pipe(retry(1),map((res)=>console.log(res)),catchError(async(err)=>ErrorHandler(err)))
    }else{alert("You dont have the permission")}
  
}
UpdateProjectDetails(name:string , newDetails:ProjectModel){
if(this.userService.AuthUser()){
let cookie = this.cookieService.get("u-auth");
let Param = new HttpParams().append("name" , name).append("cookie" , cookie)
  this.http.put(this.rootUrl+"",newDetails,{params:Param}).pipe(retry(1),map((res)=>console.log(res)),catchError(async(err)=>ErrorHandler(err)))
}else{alert("You dont have the permission")}

}
}
let ErrorHandler=(err:Error)=>{
  throw new Error("there is a problem: " + err.name + "  error message: " + err.message + " becouse of: " + err.cause)
  }