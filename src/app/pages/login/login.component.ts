import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthDataService } from 'src/app/services/auth/auth-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public email: string = "";
  public password: string = "";
  public is_logged_in: boolean = false;
  public error_occured: boolean = false;

  constructor(private router: Router, private auth_data_service: AuthDataService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    // localStorage.clear();
  }

  login(email: string, password: string): void {
    this.auth_data_service.login(email, password).subscribe({
      next: response => {
        this.is_logged_in = true;
        this.router.navigate(["/dashboard"]);
      },
      error: error => {
        this.error_occured = true;
        // console.error(error);
      }
    });
  }
}
