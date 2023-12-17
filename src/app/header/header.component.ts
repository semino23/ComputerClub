import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink ,MatButtonToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
