import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() nav_title: string;
  @Input() nav_value: string;
  
  public focus: boolean = false;
  public listTitles: any[];
  public location: Location;

  public search_text: any;
  public search_result: any;

  constructor(location: Location, private element: ElementRef, private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  // searchEnterprise(): void {
  //   this.search_result = this.enterprises.filter(enterprise => enterprise.CompanyName.toLowerCase().includes(this.search_text.toLowerCase()));
  // }

  logout(): void {
    console.log(localStorage.getItem("auth_token"));
    localStorage.clear();
    console.log(localStorage.getItem("auth_token"));
    this.router.navigate(["/login"]);
  }

}
