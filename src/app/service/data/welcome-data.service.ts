import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import {API_URL} from './../../app.constants'

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService implements OnInit {
  
  
  
  constructor(private Http:HttpClient) { }

  ngOnInit(): void {

    
  }

  executeGetCustomers(){
    // console.log(this.Http.get('${API_URL}/api/customers'))
     return this.Http.get<Todo[]>(`${API_URL}/api/customers`)
    
  }
  executeDeleteOne(id:number){
    return this.Http.delete(`${API_URL}/api/customers/${id}`)
  }
  executeGetOne(id:number){
    return this.Http.get<Todo>(`${API_URL}/api/customers/${id}`)
  }
  updateTodo(todo:Todo){
    return this.Http.put(`${API_URL}/api/customers/${todo.id}`,todo)
  }
}

