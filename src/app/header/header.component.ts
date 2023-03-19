import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuthendicated = this.auth.isAuthenticated();
  publicLinks = [
    { path: '/', label: 'Home' },
    { path: '/login', label: 'Login/Register' },
  ]
  protectedLinks = [
    { path: '/', label: 'Home' },
    { path: '/images', label: 'Images' },
    { path: '/images/post', label: 'Post Image' },
  ]
  constructor(private auth: AuthService) {
    if (this.isAuthendicated) {
      this.publicLinks = [...this.protectedLinks];
    }
  }

  onLogout() {
    this.auth.logout();
    location.reload();
  }
}
