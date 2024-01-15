import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/project.service';
import { ProjectModel } from '../../Models/ProjectOverview';
import { ProjectCardBedComponent } from '../project-card-bed/project-card-bed.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ RouterLink, ProjectCardBedComponent , ProjectCardComponent , MatButtonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent implements OnInit 
{

  
  ProjectList:Array<ProjectModel>|null = null; 
  constructor(private projectService:ProjectService){}
   async ngOnInit() {
this.projectService.GetProjectList().subscribe((res)=>this.ProjectList = res)
}


}
