import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavTitleService {
  private nav_title = new BehaviorSubject<string>('');
  public current_nav_title = this.nav_title.asObservable();

  private nav_value = new BehaviorSubject<string>('');
  public current_nav_value = this.nav_value.asObservable();

  constructor() { }

  changeNavTitle(title: string): void {
    this.nav_title.next(title);
  }

  changeNavValue(value: string): void {
    this.nav_value.next(value);
  }
}
