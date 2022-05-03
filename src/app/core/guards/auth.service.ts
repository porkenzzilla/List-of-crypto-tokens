import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {IUser} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<IUser>(null!);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
  }

  public setUser(user: IUser) {
    this.currentUserSubject.next(user);
  }

  public logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('isAuthorized');
    // removeAllCookies();
    // @ts-ignore
    this.currentUserSubject.next(null);
  }

}
