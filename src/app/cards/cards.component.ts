import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  type:string;
  p1 ;
  p2 ;
  //注入
  constructor(
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    //this.type = this.route.snapshot.params['type']; //只有component 載入時抓這參數 只有一次
    this.route.params.subscribe(params => {
      this.type = params['type'];

      this.p1 = params['p1'];
      this.p2 = params['p2'];
    });

    this.route.queryParams.subscribe(params => {
      this.p1 = params['page'];
      this.p2 = params['test'];
    })
  }

  goCard(num){
    this.router.navigate(['/' , 'cards' ,parseInt(this.type) + num]);

    // this.router.navigate([,'cards',parseInt(this.type) + num]); 無加 "/" 也可以
  }

  @HostListener('click', ['$event.target'])
  plus1(btn:HTMLButtonElement){
    let num = +btn.innerText;
    num ++;
    btn.innerText = num.toString();
  }
}
