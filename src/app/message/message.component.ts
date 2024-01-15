import { Component, Input, OnInit } from '@angular/core';
import { ChatMessageModel } from '../../Models/chatMessageModel';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-message',
  standalone: true,
  imports: [MatDividerModule,MatListModule,MatIconModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {

@Input({required:true}) message!:ChatMessageModel|undefined

profileImage:Blob|string = this.message?.author.image || "./assets/pictures/placeholder-user.jpg"

}
