import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 
@Component({
  selector: 'app-project-card-bed',
  standalone: true,
  imports: [MatCardModule , LowerCasePipe],
  templateUrl: './project-card-bed.component.html',
  styleUrl: './project-card-bed.component.scss'
})
export class ProjectCardBedComponent {
Hello = "HELLO WORLD";

}
