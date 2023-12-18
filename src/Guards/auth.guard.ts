import { Inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../Services/user.service';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
const cookieService:CookieService = Inject(CookieService);
const userService:UserService = Inject(UserService);

if(!userService.AuthUser()){
return false;
}
else{
    return true;
}

};
