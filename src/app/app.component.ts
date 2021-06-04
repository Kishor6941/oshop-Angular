import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  returnUrl : any;
  title = 'oshop';
  constructor(private userservice : UserService, private authservice: AuthService, private router : Router) {

    this.authservice.user$.subscribe(user => {
      if(user) {
        this.userservice.save(user);
      this.returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(this.returnUrl);
      }
    })
  }

}
