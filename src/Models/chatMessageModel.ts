import { UserModel } from "./UserModel";

export class ChatMessageModel{
author!:UserModel
message!:string;
id?:number;

}