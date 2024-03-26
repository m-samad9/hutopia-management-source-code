import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValueDataService } from 'src/app/services/value/value-data.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  public values: any = null;
  public current_type: any;
  public page_limit: number = 10;
  public current_page_number: number = 1;
  // public clicked_link: string = "";
  public loop_array: number[] = [];
  private total_pages: number = 0;

  constructor(private router: Router, private value_data_service: ValueDataService) { }

  ngOnInit() {
    this.getValuesByTypeId(144, this.current_page_number, this.page_limit);
  }

  getValuesByTypeId(type_id: number, page_number: number, page_size: number): void {
    if (localStorage.getItem("auth_token") !== null) {
      this.value_data_service.getValuesByTypeId(type_id, page_number, page_size).subscribe({
        next: response => {
          this.values = response.data;
          this.current_type = type_id;
          this.current_page_number = page_number;
          if (this.values[0].numberOfValues % this.page_limit === 0) {
            this.total_pages = this.values[0].numberOfValues / this.page_limit;
          } else {
            this.total_pages = Math.floor((this.values[0].numberOfValues / this.page_limit) + 1);
          }
          this.loop_array = []
          for (let i = 1; i <= this.total_pages; i++) {
            this.loop_array.push(i);
          }
        },
        error: error => console.error(error)
      });
    } else {
      this.router.navigate(["/login"]);
    }
  }
  /*setId(id: string): void {
    this.clicked_link = id;
  }*/
}
