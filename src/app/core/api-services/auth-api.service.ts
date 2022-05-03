import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ILoginBody} from '../interfaces/auth.interface';
import {AdminUser, BaseUser} from '../constants/fake-user.constant';
import {IBasicResponse, ResponseStatusMessage} from '../interfaces/core.interface';
import {IUser} from '../interfaces/user.interface';
import {map} from 'rxjs/operators';
import {AuthService} from '../guards/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  login(body: ILoginBody): Observable<IBasicResponse<IUser>> {
    return of(this.fakeloginResponse(body)).pipe(map(res => {
      if (res.status === ResponseStatusMessage.Success) {
        this.authService.setUser(res.data);
      }

      return res;
    }))
  }

  private fakeloginResponse(body: ILoginBody): IBasicResponse {
    if (body.login === AdminUser.name) {
      return {
        data: AdminUser,
        status: ResponseStatusMessage.Success,
      };
    }

    if (body.login === BaseUser.name) {
      return {
        data: BaseUser,
        status: ResponseStatusMessage.Success,
      }
    }

    return {
      status: ResponseStatusMessage.Error,
      errorMessage: 'Wrong Credentials'
    }

  }
}
