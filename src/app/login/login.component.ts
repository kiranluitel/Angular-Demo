import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  errorMessage='Invalid Credentials'
  invalidLogin=false

  constructor(private router:Router,
    private hardCodedAuthentication:HardCodedAuthenticationService,
    private basicAuthService:BasicAuthenticationService) {
     }

  ngOnInit() {
  }
  
  handleLogin(){

    this.basicAuthService.authenticate(this.username,this.password).subscribe(
      data=>{
        // console.log(data)
        this.invalidLogin=false
        this.router.navigate(['welcome',this.username])


      },
      error=>{
        // console.log(error)
        this.invalidLogin=true

      }
    )

    //for hardcodedauthentication
    // if(this.hardCodedAuthentication.authenticate(this.username,this.password)){
    //   this.invalidLogin=false
    //   this.router.navigate(['welcome',this.username])
    // }
    // else{
    //   this.invalidLogin=true
    // }

    // console.log(this.username)
  }

}
