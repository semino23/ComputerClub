import { Component, Input, OnInit } from '@angular/core';
import { ProjectBlogListModel } from '../../Models/BlogModels/ProjectBlogList';
import { ProjectService } from '../../Services/project.service';
import { ProjectCardBedComponent } from '../project-card-bed/project-card-bed.component';
import { ProjectBlogComponent } from '../project-blog/project-blog.component';
import { ProjectBlogTypes } from '../../Models/BlogModels/project-blog-types';
import { ProjectImageComponent } from '../project-image/project-image.component';
@Component({
  selector: 'app-project-blog-list',
  standalone: true,
  imports: [ProjectCardBedComponent , ProjectBlogComponent , ProjectImageComponent],
  templateUrl: './project-blog-list.component.html',
  styleUrl: './project-blog-list.component.scss'
})
export class ProjectBlogListComponent implements OnInit{
  constructor(private projectService:ProjectService){}
@Input({required:true}) title!:string|null;
project?:ProjectBlogListModel[];
ngOnInit(): void {
this.projectService.GetProjectBlogs(this.title!).subscribe((res)=>this.project = res)
}
}
