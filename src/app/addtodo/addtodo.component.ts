import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  constructor(private todoService:TodoService, private formBuilder:FormBuilder, private appRoot:AppComponent) { }

  todoForm:FormGroup;

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      name : ['',Validators.required],
      description : ['',Validators.required],
      date : ['',Validators.required]
    })
  }

  validar(cname:string){
    return this.todoForm.controls[cname].touched && this.todoForm.controls[cname].errors.required;
  }

  saveTodo(){
    console.log(this.todoForm.value);
    this.todoService.create(this.todoForm.value).subscribe(
      res=>{  
        this.appRoot.getAllTareas();
        this.appRoot.newtodo=false;
      },err=>{
        console.log(err);
      }
    );
  }
  

}
