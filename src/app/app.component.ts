import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 loadedFeature='recipe';

 ngOnInit() {
  firebase.initializeApp({
    apiKey: "AIzaSyCm73RtaRgyFfl0nMuyW7bslrUnmiKjmnU",
    authDomain: "ng-recipe-book-b363a.firebaseapp.com"
  });
 }

  onNavigate(feature:string){
    this.loadedFeature=feature;
  }
}
