import { Injectable } from '@angular/core';
import { UserModel } from '../Models/UserModel';
import { HttpClient  , HttpParams , HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError, retry, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
rootUrl = "";


  constructor(private http:HttpClient , private cookieService : CookieService) { }

// Create New User
CreateUser(user:UserModel){
  console.log("Create User " + user)
 this.http.post(this.rootUrl,user).pipe(retry(1),map((res)=>{console.log(res)}),catchError(async()=>ErrorHandler()))
}
//login methode returns authentification cookie
Login(email:string , password:string){
let Param = new HttpParams().append("email" , email).append("password" , password)
// let Header = new HttpHeaders().append("content-type" , "application/json")
// console.log("I got Headers " + Header)
console.log("I got Params " + Param)
// this.http.get(this.rootUrl , {params:Param}).pipe(retry(1),map((res)=>this.cookieService.set("u-auth", JSON.stringify(res)))) ,catchError(async()=>ErrorHandler())
console.log(this.cookieService.get("u-auth"))
}
// get User Object with authentification cookie
GetUserWithCookie(cookie:number){
let Param = new HttpParams().append("cookie" , cookie)
console.log("I got Cookies " + cookie)
this.http.get<UserModel>(this.rootUrl , {params:Param}).pipe(retry(1),map((res)=>sessionStorage.setItem("user-details" , JSON.stringify(res))),catchError(async()=>ErrorHandler()))
}
//Auth User
AuthUser():boolean{
if(this.cookieService.check("u-auth")){//is there a cookie?
let cookie = this.cookieService.get("u-auth")
let Param = new HttpParams().append("cookie" , cookie)
  if(this.http.get<boolean>(this.rootUrl + "", {params:Param})){//is the cookie not expired/server generated?
return true
  }else{return false}
}else{return false}
}
}
let ErrorHandler=()=>{
throw new Error("something went wrong")
}