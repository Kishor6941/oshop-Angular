import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Observable } from 'rxjs';
import { AppUser } from './models/app.user';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/Observable/of';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User | null>;

  constructor(private userService : UserService, public afAuth : AngularFireAuth, private route : ActivatedRoute) {
    this.user$ = afAuth.authState;
   }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.signOut();
  }

  get appUser$() : Observable<AppUser> {
    return this.user$
    .switchMap((user) => {
      if(user) return this.userService.get(user.uid);

      return Observable.of(null);
    });

  }

}
