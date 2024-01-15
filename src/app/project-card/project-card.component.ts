import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from '../../Models/ProjectOverview';
import {  MatCardModule } from '@angular/material/card';
import { DatePipe, LowerCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../Services/user.service';
import { ProjectService } from '../../Services/project.service';
import { firstValueFrom } from 'rxjs';
import { UserModel } from '../../Models/UserModel';
{ProjectService}
@Component({ 
  selector: 'app-project-card',
  standalone: true,
  imports: [MatCardModule , LowerCasePipe , DatePipe,  RouterLink , MatButtonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent{
DeleteBlog() {
if(confirm("Wirklich löschen ?")){
  this.projectService.DeleteProjects(this.Project.Title)
}
}
liked: boolean = false ;

async AddLike() {
if(this.userService.AuthUser()){
let user:UserModel|Promise<UserModel> = await firstValueFrom(this.userService.GetUserWithCookie()).then((res )=>user = res)
this.projectService.LikeProject(this.Project.Title, user)
this.Project.likes++;
console.log("someone liked " + this.Project.Title)
this.liked= true;
}
else{
  alert("Bitte logge dich ein bevor du bei unseren Projekten mitwirken kannst")
}
}
//construktor
constructor(private userService:UserService , private projectService :ProjectService){}
//initialize Project
@Input({alias:"Project" , required:true}) Project!:ProjectModel;
link:string ="";
authorImage:Blob|string = this.Project?.author.image || "./assets/pictures/placeholder-user.jpg";
projectImage:String = this.Project.image?  this.Project.image  : "./assets/pictures/placeholder-project.png";
}

