import { Component, Input } from '@angular/core';
import { ChatMessageModel } from '../../Models/chatMessageModel';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {

@Input({required:true}) message!:ChatMessageModel

profileImage:Blob|string = this.message.author.image || "./assets/pictures/placeholder-user.jpg"



}
