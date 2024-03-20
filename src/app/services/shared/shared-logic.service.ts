import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedLogicService {

  constructor() { }

  getObjectKeys(obj: any): string[]{
    return Object.keys(obj);
  }
}
