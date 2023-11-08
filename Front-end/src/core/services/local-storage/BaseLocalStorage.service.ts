import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseLocalStorageRepository {

  constructor(private key: string) { }

  public saveData(value: string) {
    localStorage.setItem(this.key, value);
  }

  public getData() {
    return localStorage.getItem(this.key)
  }
  public removeData() {
    localStorage.removeItem(this.key);
  }

  public clearData() {
    localStorage.clear();
  }
}