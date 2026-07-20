import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '@api/auth/auth.service';
import { Entity_User } from '@core/models/entities/user.entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterLink],
})
export class HomeComponent implements OnInit {

  user = Entity_User.state;
  today = new Date();
  loggingOut = signal(false);

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getUserdata();
  }

  onLogout() {
    this.loggingOut.set(true);
    this.auth.logout();
  }

}
