import { CanActivateFn } from '@angular/router';
import { UserService } from '../Services/user.service';
import { inject } from '@angular/core';
export const adminGuard: CanActivateFn = (route, state) => {
  const userService:UserService = inject(UserService);
 if(userService.AuthUserAsAdmin()){
  return true;
 }
 else{
  //TODO change to false
  return true;
 }

};
