import {  inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../Services/user.service';

export const authGuard: CanActivateFn = (route, state ) => {
// const userService:UserService = inject(UserService);
// if(!userService.AuthUser()){
// return true;
// }
// else{
//     return true;
// }
return true
};
