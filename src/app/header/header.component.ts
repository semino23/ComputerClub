import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {Breakpoints , BreakpointObserver, BreakpointState} from '@angular/cdk/layout';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink ,MatButtonToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
constructor(private responsive:BreakpointObserver ){}
Breakpoints = Breakpoints
layout!:BreakpointState;

  ngOnInit(): void {
this.responsive.observe([Breakpoints.Web , Breakpoints.Handset , Breakpoints.TabletLandscape]).subscribe((res)=>this.layout= res)
console.log(this.layout)



}


}


