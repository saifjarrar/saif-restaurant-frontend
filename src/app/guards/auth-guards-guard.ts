// المسار المقترح: src/app/guards/auth.guards.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth-service';

// للصفحات اللي بتحتاج تسجيل دخول (أي مستخدم)
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) {
    return true;
  }
  return router.parseUrl('/login');
};

// لصفحات الأدمن فقط
export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    return router.parseUrl('/login');
  }

  // زبون مسجّل بس مش أدمن: رجّعه للمينيو
  return auth.isAdmin() ? true : router.parseUrl('/layout/menu');
};
