import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
@Component({
  selector: 'app-write-comment-or-suggestion-form',
  standalone: true,
  imports: [FormsModule , MatButtonModule , MatInputModule],
  templateUrl: './write-comment-or-suggestion-form.component.html',
  styleUrl: './write-comment-or-suggestion-form.component.scss',
  providers:[]
})
export class WriteCommentOrSuggestionFormComponent {

comment:String=""

SendComment = () =>
{
  if(this.comment !== ""){
console.log("commented " + this.comment)
}
};


}
