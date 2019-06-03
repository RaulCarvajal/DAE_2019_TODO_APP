import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { res, resArray } from "./templates";
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getAll(){
    
    return this.http.get<resArray>("http://127.0.0.1:3031/tareas/getall");
  }

  getById(id:string){
    return this.http.get<res>("http://127.0.0.1:3031/tareas/getbyid/"+id);
  }

  create(nuevo:JSON){
    return this.http.post<res>("http://127.0.0.1:3031/tareas/create",nuevo);
  }

  setDone(id:string){
    return this.http.patch<res>("http://127.0.0.1:3031/tareas/setdone/"+id,{});
  }
  
}