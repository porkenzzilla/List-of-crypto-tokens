import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setInfo(key: string, data: any): void {
    try {
      key.toLowerCase().includes("image") ? localStorage.setItem(key, data) : localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  getInfo(key: string) {
    try {
      return key.toLowerCase().includes("image") ? localStorage.getItem(key) : JSON.parse(localStorage.getItem(key)!);
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
