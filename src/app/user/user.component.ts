import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../Services/user.service';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
private userService:UserService = inject(UserService)

ngOnInit(): void {

this.userService.GetUserWithCookie()

}
}
