import { Component } from '@angular/core';
import { FormControl , FormGroup , MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { UserModel } from '../../Models/UserModel';

//Materials
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule , MatFormFieldModule , MatInputModule ,MatButtonModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss',
  providers:[UserService]
})
export class NewUserComponent {
  EmailErr = false;
  passwordErr = false;
constructor(private userService:UserService){}


NewUser = new FormGroup({
  email :new FormControl("" , [Validators.required , Validators.email]),
  name : new FormControl("" , Validators.required),
  password: new FormControl("" , [Validators.required , Validators.minLength(10)])
})


ClickHandler(){
let email = this.NewUser.value.email as string; 
let name = this.NewUser.value.name as string;
let password = this.NewUser.value.password as string;
this.userService.CreateUser({
  name: name, 
  email: email, 
  password: password,
})
}
}
