import { UserModel } from "./UserModel";

export class ProjectModel{
    author!: UserModel;
    Title!: string;
    description! : string;
    image?:Blob;
    }