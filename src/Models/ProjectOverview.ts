import { UserModel } from "./UserModel";

export interface ProjectModel{
    date:Date
    author: UserModel;
    Title: string;
    description: string;
    image?:Blob;
    likes:number;
    }