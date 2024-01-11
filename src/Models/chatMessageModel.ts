import { UserModel } from "./UserModel";

export interface ChatMessageModel{
author:UserModel
message:string;
}