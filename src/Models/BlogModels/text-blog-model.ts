import { UserModel } from "../UserModel";

export class TextBlogModel {
titel!:string;
author!:UserModel
text!:string;
date!:Date;
id?:number;
}
