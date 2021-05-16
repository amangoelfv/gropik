import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ILoginResponse } from '../modules/auth/interfaces/login.interface';
import { IHttpResponse } from '../shared/interfaces/http.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sampleUser = {
    name: 'Aman Goel',
    email: 'amangoel300@gmail.com',
    token: 'AUTH TOKEN'
  }
  constructor() { }

  user: any;

  login(email: string, password: string): Observable<IHttpResponse<ILoginResponse>> {
    return of({
      success: true,
      reason: '',
      data: { user: this.sampleUser }
    }).pipe(delay(200));
  }
}
