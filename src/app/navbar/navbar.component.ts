import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app.user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appUser : AppUser | undefined;
  constructor(private authservice : AuthService) { 
    authservice.appUser$.subscribe(appUser => this.appUser = appUser)
  }

  ngOnInit(): void {

  }
  logout() {
    this.authservice.logout();
  }
}
