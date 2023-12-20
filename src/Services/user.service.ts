import { Injectable } from '@angular/core';
import { UserModel } from '../Models/UserModel';
import { HttpClient  , HttpParams , HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError, retry, Observable, firstValueFrom, retryWhen } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
rootUrl = "";


  constructor(private http:HttpClient , private cookieService : CookieService) { }

// Create New User
CreateUser(user:UserModel){
  console.log("Create User " + user)
 this.http.post(this.rootUrl,user).pipe(retry(1),map((res)=>{console.log(res)}),catchError(async(err)=>ErrorHandler(err))).subscribe((res)=>console.log(res))
}
//login methode returns authentification cookie
Login(email:string , password:string){
let Param = new HttpParams().append("email" , email).append("password" , password)
this.http.get(this.rootUrl , {params:Param}).pipe(retry(1),catchError(async(err)=>ErrorHandler(err))).subscribe((res)=>this.cookieService.set("u-auth" , JSON.stringify(res)))
console.log(this.cookieService.get("u-auth"))
}
// get User Object with authentification cookie
GetUserWithCookie(){
if(this.cookieService.check("u-auth")){
const cookie = this.cookieService.get("u-auth")
let Param = new HttpParams().append("cookie" , cookie)
console.log("I got Cookies " + cookie)
this.http.get<UserModel>(this.rootUrl , {params:Param}).pipe(retry(1),catchError(async(err)=>ErrorHandler(err))).subscribe((res)=>sessionStorage.setItem("user" , JSON.stringify(res)))
}else{console.log("no Cookies :(")}}
//Auth User
 AuthUser():boolean{
if(this.cookieService.check("u-auth")){//is there a cookie?
let cookie = this.cookieService.get("u-auth")
let Param = new HttpParams().append("cookie" , cookie)
let auth!:boolean;
 this.http.get<boolean>(this.rootUrl + "", {params:Param}).pipe(catchError(async(err)=>ErrorHandler(err))).subscribe((res)=>auth = res);        //is the cookie not expired/server generated?
return auth || false;



}
}}
let ErrorHandler=(err:Error)=>{
throw new Error("there is a problem: " + err.name + "  error message: " + err.message + " becouse of: " + err.cause)
}