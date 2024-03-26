import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavTitleService } from 'src/app/services/nav/nav-title.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  public users: any;
  public title: string = "List of Users: ";
  public info: string;

  constructor(private router: Router, private user_data_service: UserDataService/*, private nav_title_service: NavTitleService*/) { }

  ngOnInit() {
    // this.nav_title_service.changeNavTitle('List of Users: ');
    this.getAllUsers();
  }

  getAllUsers(): void {
    if (localStorage.getItem("auth_token") !== null) {
      this.user_data_service.getAllUsers().subscribe({
        next: response => {
          this.users = response.data;
          // this.nav_title_service.changeNavValue(this.users.length + ' active users');
          this.info = this.info = this.users.length + ' active users';
        },
        error: error => console.error(error)
      });
    } else {
      this.router.navigate(["/login"]);
    }
  }

}
