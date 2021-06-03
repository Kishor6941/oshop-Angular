import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth : AngularFireAuth) { }

  ngOnInit(): void {
  }
  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
}
