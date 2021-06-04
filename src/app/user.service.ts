import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db : AngularFireDatabase) { }

  save(user : firebase.User) {
    this.db.object('/users/'+ user.uid).update({
      name : user.displayName,
      email : user.email
    })
  }
}
