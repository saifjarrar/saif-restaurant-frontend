import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  router = inject(Router);
  menuOpen = signal(false);

  // NEW: بيفتح القائمة لو مسكّرة، وبيسكّرها لو مفتوحة
  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  // NEW: بيسكّر القائمة (بنستخدمه بعد ما تضغط أي رابط)
  closeMenu() {
    this.menuOpen.set(false);
  }
  onLogout() {
    this.router.navigateByUrl('/login');
  }
}
