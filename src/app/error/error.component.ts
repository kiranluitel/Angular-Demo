import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage='You typed-in a wrong url'

  constructor() { }

  ngOnInit() {
    
    
    
    
    
  }

}
