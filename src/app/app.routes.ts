import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from '../Guards/auth.guard';
import { ProjectListComponent } from './project-list/project-list.component';
import { JoiningFormComponent } from './joining-form/joining-form.component';
import { ProjectThreadComponent } from './project-thread/project-thread.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewBlogFormComponent } from './new-blog-form/new-blog-form.component';

export const routes: Routes = [
    {path:"" , component:HomeComponent},
    {path:"Impressum", component:LegalNoticeComponent},
    {path:"U", component:LoginComponent},
    {path:"U/NewUser" , component:NewUserComponent},
    {path:"U/Account" , component:UserComponent , canActivate:[authGuard]},
    {path:"Projekte" , component:ProjectListComponent},
    {path:"Projekte/Neues Projekt" , component:NewProjectComponent , canActivate:[authGuard]},
    {path:"Projekte/Neuer Blog" , component:NewBlogFormComponent , canActivate:[authGuard]},
    {path:"Projekte/:name" , component:ProjectThreadComponent},
    {path:"Beitreten" , component:JoiningFormComponent},
    {path:"**", redirectTo:""}, 
];
