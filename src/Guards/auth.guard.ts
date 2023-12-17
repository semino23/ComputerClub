import { Inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../Services/user.service';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
const cookieService:CookieService = Inject(CookieService);
const userService:UserService = Inject(UserService);

if(!cookieService.check("u-auth")){
  return false;
}
else{
  let cookie = JSON.parse(cookieService.get("u-auth"));
  userService.GetUserWithCookie(cookie)
  return true;
}

};
