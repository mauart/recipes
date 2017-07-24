import { Component,OnInit,OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'app works!';
  loadedFeature='recipe';
  onNavigate(feature)
  {
    this.loadedFeature=feature;
  }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCilRHofaNdy2pdsG_5t7sWtpgZ19k8g1A",
      authDomain: "myproject-dfa3f.firebaseapp.com"
    });
  }
  ngOnDestroy(){

  }
}
