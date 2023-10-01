import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
tradeHubList: any[] = [];
  constructor(
    private dashboardService: DashboardService,
    public dms: DomSanitizer
  ) { }

  ngOnInit() {
    this.getDashboardDetails();
  }

  getDashboardDetails() {
    this.dashboardService.getDashboardDetails().subscribe((res: any)=>{
      this.tradeHubList = res.BANNERIMAGES;
    })
  }

  displayImage(imgString: any) {
    // conversion to base64
    return this.dms.bypassSecurityTrustUrl("data:image/jpeg;base64," + imgString);
  }

}
