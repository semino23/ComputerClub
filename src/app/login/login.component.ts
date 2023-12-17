import { Component } from '@angular/core';
import { FormControl , FormGroup , ReactiveFormsModule} from '@angular/forms';
import { RouterLink, RouterOutlet  , RouterModule, Router} from '@angular/router';
import { UserService } from '../../Services/user.service';
//Materials
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterLink, RouterOutlet ,ReactiveFormsModule , MatInputModule , MatFormFieldModule ,MatButtonModule , RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers:[UserService],
})
export class LoginComponent{
constructor(private userService:UserService , private router:Router){}

loginForm = new FormGroup({email: new FormControl("") , password : new FormControl("") });


 async ClickHandler(){
 let email:string = this.loginForm.value.email as string ;
 let password:string =  this.loginForm.value.password as string;
 this.userService.Login(email , password)
}
  



}
