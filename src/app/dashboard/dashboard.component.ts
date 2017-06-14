import { Component, OnInit } from '@angular/core';
import { initDashboard } from '../shared/init-dashboard';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    //注入router 元件服務可設定轉址 、取得完成資訊
    //注入ActivatedRoute 可抓狀態、變數 (目前啟用的 route)

    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //執行 jquery 執行dashboard的function
    $(initDashboard)
  }


  goCards(type){
    //this.router.navigateByUrl('/cards/' + type);
      this.router.navigate(['/', 'cards', type, { test: 1 }], {
      queryParams: {
         page: 10
       }
     });
  }
}
