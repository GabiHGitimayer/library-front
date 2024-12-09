import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  isLocalStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && 'localStorage' in window && window.localStorage !== null;
    } catch (error) {
      return false;
    }
  }

  getItem(key: string): string | null {
    if (this.isLocalStorageAvailable()) {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.error(`Error accessing localStorage: ${error}`);
        return null;
      }
    }
    return null;
  }

  setItem(key: string, value: string): void {
    if (this.isLocalStorageAvailable()) {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        console.error(`Error setting item in localStorage: ${error}`);
      }
    }
  }

  removeItem(key: string): void {
    if (this.isLocalStorageAvailable()) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing item from localStorage: ${error}`);
      }
    }
  }
}
