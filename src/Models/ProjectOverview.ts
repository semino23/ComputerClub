import { UserModel } from "./UserModel";

export class ProjectModel{
    date!: Date;
    author!: UserModel;
    Title!: string;
    description!: string;
    image?:String;
    likes!:number;
    id?:number;
    }