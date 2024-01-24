import { Injectable } from '@angular/core';
import { UserModel } from '../Models/UserModel';
import { HttpClient  , HttpParams , HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError, retry, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
rootUrl = "";
CreateAdmin(user:UserModel , authCode:string){
let Param = new HttpParams().set("authCode" , authCode)
this.http.post(this.rootUrl + "" , user , {params:Param}).pipe(catchError(async(err)=>ErrorHandler(err)))
}
  constructor(private http:HttpClient , private cookieService : CookieService) { }

//cheks if use is admin (member of the computerclub)
AuthUserAsAdmin():boolean{
  if(this.cookieService.check("u-auth")){
  let param = new HttpParams().set("cookie" , this.cookieService.get("u-auth"))
   let isAdmin:boolean = false;
    this.http.get<boolean>(this.rootUrl + "/chekUserIsAdmin" , {params:param}).subscribe((res)=> isAdmin = res)
    return isAdmin;
  }
else{
  return false
}
}

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
GetUserWithCookie():Observable<UserModel>{
const cookie = this.cookieService.get("u-auth")
let Param = new HttpParams().append("cookie" , cookie)
console.log("I got Cookies " + cookie)
return this.http.get<UserModel>(this.rootUrl , {params:Param}).pipe(retry(1),catchError(async(err)=>ErrorHandler(err)));
}
//Auth User
 AuthUser():boolean{
if(this.cookieService.check("u-auth")){//is there a cookie?
let cookie = this.cookieService.get("u-auth")
let Param = new HttpParams().append("cookie" , cookie)
let auth!:boolean;
this.http.get<boolean>(this.rootUrl + "", {params:Param}).pipe(catchError(async(err)=>ErrorHandler(err))).subscribe(res => auth = res ) || false; //check cookie validation?
return auth
}else{
return false}
}}
let ErrorHandler=(err:Error)=>{
throw new Error("there is a problem: " + err.name + "  error message: " + err.message + " becouse of: " + err.cause)
}