import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit(){

    
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDJsfRDLFQDnvawyOD676yIDlWH1V5DzWQ",
  authDomain: "nodeangular-7d12b.firebaseapp.com",
  databaseURL: "https://nodeangular-7d12b.firebaseio.com",
  projectId: "nodeangular-7d12b",
  storageBucket: "nodeangular-7d12b.appspot.com",
  messagingSenderId: "31666325718"
};
firebase.initializeApp(config);
}
}