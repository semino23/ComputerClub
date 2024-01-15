import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, Validators , ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import { ProjectService } from '../../Services/project.service';
import { ProjectModel } from '../../Models/ProjectOverview';
@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [FormsModule ,MatInputModule,ReactiveFormsModule , MatButtonModule],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.scss'
}) 
export class NewProjectComponent {
constructor(private projectService:ProjectService){}
  onFileSelect($event: any){
    let file = $event.srcElement.files[0]
    // console.info(file)
      if(file.lenght !== null && file.size <= 1e+6){
    const reader = new FileReader()
    reader.readAsDataURL(file)
    // reader.onprogress=()=>console.log("Working")
    reader.onerror = () =>{ 
      alert("Irgendwas ist schiefgelaufen")
      this.blogForm.controls['image'].setErrors({'incorrect':true})
    }
    reader.onload = () => this.blogForm.patchValue({image : reader.result as string})

    }
  else{
    alert("Dateien mit einem null Wert Werden nicht angenommen")
    this.blogForm.controls['image'].setErrors({'incorrect':true}) 
  } 
  }

PostProject() {
  if(!this.blogForm.invalid){
let project = new ProjectModel()
project.Title = this.blogForm.value.titel!;
project.description = this.blogForm.value.description? this.blogForm.value.description : "" ;
project.image = this.blogForm.value.image?this.blogForm.value.image:undefined;
this.projectService.PostProject(project)
  }}

blogForm = new FormGroup({
  titel : new FormControl("" , [Validators.required]),
  description : new FormControl(""),
  image: new FormControl("")
})


}
