import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { tarea } from './templates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private tareaService:TodoService){
  }
  
  ngOnInit(){
    this.getAllTareas();
  }

  tareas:tarea[]=[];
  newtodo:boolean=false;
  dettodo:boolean=false;
  dis:boolean=false;
  detid:string;

  getAllTareas(){
    this.tareaService.getAll().subscribe(
      res=>{
        this.tareas=res.detail;
      }
      ,err=>{
        console.log(err);
      });
  }
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
  viewTarea(id:string){
    this.dis=true;
    this.newtodo=false;
    this.dettodo=true;
    this.detid=id;
  }
  setDone(id:string){
    this.tareaService.setDone(id).subscribe(
      res=>{
        console.log(res);
        this.getAllTareas();
      },err=>{
        console.log(err);
      }
    )
  }
  newTodo(){
    this.newtodo=!this.newtodo;
    this.dettodo=false;
  }

}
