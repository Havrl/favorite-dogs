import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public readonly itemName: string = 'favorite-dogs';
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = this.storage.getItem(key) || '[]';
    return JSON.parse(item);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }

  getFavorites() {
    return this.getItem(this.itemName);
  }

  saveFavorites(value: any) {
    this.setItem(this.itemName, value);
  }
}
