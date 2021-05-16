import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private storage: StorageService
  ) { }

  user: any;
  userSignedInSub: Subject<any> = new Subject<any>();
  userSignedOutSub: Subject<boolean> = new Subject<boolean>();

  signin(user: any) {
    this.user = user;
    this.userSignedInSub.next(user);
    this.storage.setItem('user', user);
  }

  signOut() {
    this.user = null;
    this.userSignedOutSub.next(true);
    this.storage.removeItem('user');
  }
}
