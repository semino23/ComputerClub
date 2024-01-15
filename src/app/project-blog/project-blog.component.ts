import { Component, Input, OnInit } from '@angular/core';
import { ProjectBlogListModel } from '../../Models/BlogModels/ProjectBlogList';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common'
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-project-blog',
  standalone: true,
  imports: [MatCardModule , DatePipe , MatButtonModule],
  templateUrl: './project-blog.component.html',
  styleUrl: './project-blog.component.scss'
})
export class ProjectBlogComponent {
@Input({required:true}) projectBlogOverView!:ProjectBlogListModel

 
}
