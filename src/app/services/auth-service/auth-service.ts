// المسار المقترح: src/app/services/auth-service/auth-service.ts
import { Injectable } from '@angular/core';

// شكل الرد الفعلي من الباك إند عندك (ApiResponse مع LoginResponseDto جواته)
export interface LoginResult {
  email: string;
  token: string;
  role: string;
  expiersAt: string; // الاسم مكتوب هيك بالباك إند (ExpiersAt)، فبيوصل هيك
}

export interface LoginResponse {
  status: number;
  isSuccess: boolean;
  errors: string[];
  result: LoginResult | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // يحفظ التوكن والدور بعد تسجيل الدخول
  saveSession(token: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get role(): string | null {
    return localStorage.getItem('role');
  }

  // هل في مستخدم مسجّل دخول؟
  isLoggedIn(): boolean {
    return this.token !== null;
  }

  // هل هو أدمن؟
  isAdmin(): boolean {
    return this.role === 'Admin';
  }

  // تسجيل الخروج: امسح كل شي
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}
