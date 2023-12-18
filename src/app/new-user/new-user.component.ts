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
  providers:[UserService, UserModel]
})
export class NewUserComponent {
  EmailErr = false;
  passwordErr = false;
userModel:UserModel = new UserModel();
constructor(private userService:UserService){}


NewUser = new FormGroup({
  email :new FormControl(""),
  name : new FormControl(""),
  password: new FormControl("")
})


ClickHandler(){
this.userModel.email = this.NewUser.value.email as string; 
this.userModel.name = this.NewUser.value.name as string;
this.userModel.password = this.NewUser.value.password as string;
this.userService.CreateUser(this.userModel)
}
}
