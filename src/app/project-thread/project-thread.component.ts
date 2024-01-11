import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs'; 
import { ProjectBlogListComponent } from '../project-blog-list/project-blog-list.component';
import { ProjectService } from '../../Services/project.service';
import { ProjectBlogListModel } from '../../Models/BlogModels/ProjectBlogList';
import { MessageListComponent } from '../message-list/message-list.component';
@Component({
  selector: 'app-project-thread',
  standalone: true,
  imports: [MatTabsModule , ProjectBlogListComponent , MessageListComponent],
  templateUrl: './project-thread.component.html',
  styleUrl: './project-thread.component.scss'
})
export class ProjectThreadComponent implements OnInit {
name:string=""
constructor(private route:ActivatedRoute , private projectService:ProjectService){}
ngOnInit(): void {
this.name = this.route.snapshot.paramMap.get("name") ?? ""
}
}
