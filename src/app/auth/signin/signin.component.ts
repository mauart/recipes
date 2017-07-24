import { Component, OnInit,OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  ngOnDestroy(){
  }
  onSignin(form:NgForm){
    const email:string=form.value.email;
    const password:string=form.value.password;
    this.authService.signinUser(email,password);
    console.log(email,password);
  }
  

}
