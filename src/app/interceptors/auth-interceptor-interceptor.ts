// المسار المقترح: src/app/interceptors/auth.interceptor.ts
// الـ interceptor بيمسك كل طلب خارج لـ Angular قبل ما يطلع، وبيضيف عليه التوكن
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth-service/auth-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // لو في توكن، أضفه كـ header: Authorization: Bearer <token>
  const request = auth.token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${auth.token}` } })
    : req;

  return next(request).pipe(
    catchError((error) => {
      // 401 = التوكن منتهي أو غير صالح: امسح الجلسة وارجع لتسجيل الدخول
      if (error.status === 401 && auth.isLoggedIn()) {
        auth.logout();
        router.navigateByUrl('/login');
      }
      return throwError(() => error);
    }),
  );
};
