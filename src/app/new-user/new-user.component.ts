import { Component } from '@angular/core';
import { FormControl , FormGroup , MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { UserModel } from '../../Models/UserModel';

//Materials
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule , MatFormFieldModule , MatInputModule ,MatButtonModule,MatCheckboxModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss',
})
export class NewUserComponent {
//  isAdmin:boolean = false
//   admin= ()=>{
// this.isAdmin = true;
//  };
  constructor(private userService:UserService){}


NewUser = new FormGroup({
  name : new FormControl("" , Validators.required),
  password: new FormControl("" , [Validators.required , Validators.minLength(10)]),
  admin : new FormControl(false),
  adminCode: new FormControl("")
})


ClickHandler(){
let user = new UserModel()
user.name = this.NewUser.value.name as string;
user.password = this.NewUser.value.password as string;
if(this.NewUser.value.admin && this.NewUser.value.adminCode){
let authCode = this.NewUser.value.adminCode
this.userService.CreateAdmin(user , authCode)

}
else if(!this.NewUser.value.admin){
  this.userService.CreateUser(user);
}
else console.log("no auth code :(");
// this.userService.CreateUser(user)
}
}
