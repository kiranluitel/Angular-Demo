import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
 

  todos:Todo[]
  message:string
  myTodo:Todo
  

  constructor(private dataService:WelcomeDataService,
    private router:Router) { }

  ngOnInit() {
   this.refreshTodos()
  }

   refreshTodos(){
    this.dataService.executeGetCustomers().subscribe(
      response=>{
        // console.log(response)
        this.todos=response
        // console.log(this.todos)
      }
    )
  }

  deleteOne(id:number){
    // console.log("Delete a customer with id "+id)
    this.dataService.executeDeleteOne(id).subscribe(
      response=>{
        // console.log(response)
        this.message=`Customer ${id} deletion successful`
        this.refreshTodos()
      }
    
    )
  }
  // setMessage(message: string) {
  //   this.message=message
  // }
  update(id:number){
    this.router.navigate(['todos',id])
    
    
  }

}
export class Todo{
  constructor(
    public id:number,
    public firstName:string,
    public lastName:string,
    public email:string

  ){

  }
}
