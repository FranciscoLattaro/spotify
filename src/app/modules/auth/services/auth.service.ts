import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service'; // Make sure this is installed and imported correctly
import { environment } from 'src/environtments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api

  constructor(private http: HttpClient, private cookie: CookieService) {}

  sendCredentials(email: string, password: string): Observable<any> {
    return this.http.post(`${this.URL}/auth/login`, { email, password })
      .pipe(
        tap((resOK: any) => {
          const { tokenSession } = resOK;
          this.cookie.set('token', tokenSession);
        }),
        catchError(err => {
          console.error('Error during login:', err);
          throw err;
        })
      );
  }
}
