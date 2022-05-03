import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedIn: boolean;

  constructor() {
      this.isloggedIn=false;
  }

  isUserLoggedIn(): boolean {
      return this.isloggedIn;
  }

  isAdminUser(username: string, password:string): Observable<boolean> {
      if (username.toLowerCase() === 'admin' && password.toLowerCase() === 'admin') {
          this.isloggedIn=true;
      }
      return of(this.isloggedIn);
  }

}
