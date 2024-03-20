import { Component, OnInit } from '@angular/core';
import { EnterpriseDataService } from 'src/app/services/enterprise-data.service';
import { NavTitleService } from 'src/app/services/nav/nav-title.service';
import { SharedLogicService } from 'src/app/services/shared/shared-logic.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  public enterprises: any;
  public title: string = "List of Enterprises: ";
  public info: string;

  constructor(private enterprise_data_service: EnterpriseDataService, public shared_logic_service: SharedLogicService/*, private nav_title_service: NavTitleService*/) { }

  ngOnInit() {
    // this.nav_title_service.changeNavTitle('List of Enterprises: ');
    this.getAllEnterprises();
  }

  getAllEnterprises(): void {
    this.enterprise_data_service.getAllEnterprises().subscribe({
      next: response => {
        this.enterprises = response.data;
        // this.nav_title_service.changeNavValue(this.enterprises.length + ' active enterprises');
        this.info = this.enterprises.length + ' active enterprises';
      },
      error: error => console.error(error)
    });
  }


}
