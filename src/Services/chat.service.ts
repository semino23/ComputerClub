import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ChatMessageModel } from '../Models/chatMessageModel';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
rootUrl = "";
  getChatHistory(title: string):Observable<Array<ChatMessageModel>>{
let History:Array<ChatMessageModel>
let Params = new HttpParams().set("title" , title)
return this.http.get<Array<ChatMessageModel>>(this.rootUrl + "/GetHistory", {params:Params})
}
constructor(private http:HttpClient) { }

chatStart(name:string){}


chatEnd(name:string){}


}
function handleError(err:Error){
console.error("someting went wrong" + err)
}