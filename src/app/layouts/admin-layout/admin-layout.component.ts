import { Component, OnInit } from '@angular/core';
import { NavTitleService } from 'src/app/services/nav/nav-title.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  // public admin_nav_title: string;
  // public admin_nav_value: string;

  constructor(/*private nav_title_service: NavTitleService*/) { }

  ngOnInit() {
    // this.nav_title_service.current_nav_title.subscribe(title => this.admin_nav_title = title);
    // this.nav_title_service.current_nav_value.subscribe(value => this.admin_nav_value = value);
  }

}
