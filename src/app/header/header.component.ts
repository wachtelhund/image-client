import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private auth: AuthService, private router: Router) {
    if (this.isAuthendicated) {
      this.publicLinks = [...this.protectedLinks];
    }
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/']);
    setTimeout(() => {
      window.location.reload();
    }, 0);
  }
}
