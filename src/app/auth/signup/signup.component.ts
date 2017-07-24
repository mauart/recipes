import { Component, OnInit,OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  ngOnDestroy(){
  }
  onSignup(form:NgForm){
    const email:string=form.value.email;
    const password:string=form.value.password;
    console.log(email,password);
    this.authService.signupUser(email,password);
  }
}
