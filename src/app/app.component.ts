import { Component, OnInit } from '@angular/core';
import { RestService } from './restservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Search Visitors';
  memberList: any;
  searchString = '';
  noData: boolean;
  constructor(private apiService: RestService) { }

  ngOnInit() {
  }

  public searchMembers() {
    console.log(this.searchString) ;
    this.apiService.getDetails(this.searchString).subscribe((data) => {

      if (data[0]) {
        this.memberList = data;
        this.noData = false;
      } else {
        this.noData = true;
        this.memberList = [];
      }
    });
  }
}
