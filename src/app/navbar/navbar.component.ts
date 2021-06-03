import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: firebase.User | null | undefined;

  constructor(public afAuth : AngularFireAuth) { 
    afAuth.authState.subscribe(user => {
      this.user = user      
    } );
  }

  ngOnInit(): void {

  }
  logout() {
    this.afAuth.signOut();
  }
}
