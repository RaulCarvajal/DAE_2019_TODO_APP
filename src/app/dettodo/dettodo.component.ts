import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { tarea } from '../templates';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dettodo',
  templateUrl: './dettodo.component.html',
  styleUrls: ['./dettodo.component.css']
})
export class DettodoComponent implements OnInit {

  constructor(private todoService:TodoService, private appRoot:AppComponent) { }

  ngOnInit() {
    this.todoService.getById(this.appRoot.detid).subscribe(
      res=>{
        this.tarea=res.detail;
      },err=>{
        console.error(err);
      }
    );
  }

  tarea:tarea;

  getDate(d:string):string{
    return d.substring(0,10);
  }
  getStatus(s:Boolean):string{
    if(s){
      return "Lista";
    }else{
      return "Pendiente";
    }
  }
  ret(){
    this.appRoot.dettodo=false;
    this.appRoot.dis=false;
  }

}
