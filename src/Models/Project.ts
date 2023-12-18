import { UserModel } from "./UserModel";

export interface ProjectModel{
    author: UserModel;
    Title: string;
    description: string;
    image:Blob;
    }