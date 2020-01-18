import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { Todo, ListTodosComponent } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number
  myTodo:Todo
  message:string

  constructor(private router:Router,
    private dataService:WelcomeDataService,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit()
   {
    this.id = this.activatedRoute.snapshot.params['id']
    if(this.id !=-1){
    this.dataService.executeGetOne(this.id).subscribe
    
    (
      response=>
      {
        // console.log(response)
        this.myTodo=response
      }
    )
    } else this.myTodo=new Todo(0,"","","")
}
  save(){
    this.dataService.updateTodo(this.myTodo).subscribe(
      response=>{
        this.message=`${this.myTodo.firstName} is 
        successfully updated`
        this.router.navigate(['todos'])
        

      }
    )
  }
}

  
  


