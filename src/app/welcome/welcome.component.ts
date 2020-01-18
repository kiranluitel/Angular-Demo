import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  data:Todo[]
  name=''

  constructor(private activatedRoute:ActivatedRoute,
    private welcomeDataService:WelcomeDataService,
    private basicAuth: BasicAuthenticationService) { }

  ngOnInit() {
    this.name=this.activatedRoute.snapshot.params['name']
  }

  // check(){
  //   return this.basicAuth.authenticate().subscribe(
  //     response=>{
  //       console.log(response)
  //       this.data=response
  //     }
  //   )
  // }

 


}
