import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from '../Guards/auth.guard';

export const routes: Routes = [
    {path:"" , component:HomeComponent},
    {path:"Impressum", component:LegalNoticeComponent},
    {path:"U", component:LoginComponent},
    {path:"U/NewUser" , component:NewUserComponent},
    {path:"U/Account" , component:UserComponent, canActivate:[authGuard]},
    {path:"**", redirectTo:""},
];
