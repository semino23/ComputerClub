import { Component, Input, OnDestroy, OnInit, untracked } from '@angular/core';
import { ChatService } from '../../Services/chat.service';
import { ChatMessageModel } from '../../Models/chatMessageModel';
import { MessageComponent } from '../message/message.component';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list';
import { WriteCommentOrSuggestionFormComponent } from '../write-comment-or-suggestion-form/write-comment-or-suggestion-form.component';
@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [MessageComponent , MatDividerModule , MatListModule , WriteCommentOrSuggestionFormComponent],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
})
export class MessageListComponent implements OnInit , OnDestroy {

@Input() title!:string;

messageList!:Array<ChatMessageModel>;
constructor(private chatService:ChatService){}


ngOnInit(): void {
  this.chatService.getChatHistory(this.title).subscribe((res)=>this.messageList = res);
  console.log(this.messageList)
  this.chatService.chatStart(this.title);
}
ngOnDestroy(): void {
  this.chatService.chatEnd(this.title)
}
} 

