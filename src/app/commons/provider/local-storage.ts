import { Provider, Injectable } from '@angular/core';
// import { isNumber } from 'util';
@Injectable()
export class LocalStorage {

  public localStorage: any;
  constructor() {
    if (!localStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
  }
  public set(key: string, value: string | number): void {
    this.localStorage[key] = value;
  }

  public get(key: string): string {
    return this.localStorage[key];
  }

  public setObject(key: string, value: any): void {
    this.localStorage[key] = JSON.stringify(value);
  }

  public getObject(key: string): any {
    return JSON.parse(this.localStorage[key] || '{}');
  }

  public remove(key: string): any {
    this.localStorage.removeItem(key);
  }

  public getLanguageId(): number {
    let result = 1;
    if (!isNaN(parseInt(this.get('languageid')))) {
      result = +this.get('languageid');
    }
    return result;
  }
}
