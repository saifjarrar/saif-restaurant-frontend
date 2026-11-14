import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth-service';

@Component({
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  router = inject(Router);
  menuOpen = signal(false);
  auth = inject(AuthService);

  // NEW: بيفتح القائمة لو مسكّرة، وبيسكّرها لو مفتوحة
  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  // NEW: بيسكّر القائمة (بنستخدمه بعد ما تضغط أي رابط)
  closeMenu() {
    this.menuOpen.set(false);
  }
  onLogout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
