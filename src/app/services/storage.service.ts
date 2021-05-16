import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  storage = window.localStorage;

  setItem(key: any, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: any) {

    const value = this.storage.getItem(key);

    if (!value) return null;

    return JSON.parse(value);
  }

  removeItem(key: any) {

    this.storage.removeItem(key);

  }
}
