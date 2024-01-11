import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/project.service';
import { ProjectModel } from '../../Models/ProjectOverview';
import { ProjectCardBedComponent } from '../project-card-bed/project-card-bed.component';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCardBedComponent , ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit 
{
  TestModel:Array<ProjectModel> = new Array<ProjectModel>(10).fill(
    {
      Title: "Hello World!",
      description: "Hello This is a brief description about a sample Project",
      author: {
        name: 'Semino',
        password: 'Test',
        email: 'NotARealUser',
      },
      date: new Date(),
      likes: 0,
    }
  )
  ProjectList:Array<ProjectModel>|null = null; 
  constructor(private projectService:ProjectService){}
   async ngOnInit() {
this.projectService.GetProjectList().subscribe((res)=>this.ProjectList = res)
if(this.ProjectList === null){
  this.ProjectList = this.TestModel;
}


}
}