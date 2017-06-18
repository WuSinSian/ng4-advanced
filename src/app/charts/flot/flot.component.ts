import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { FlotCharts } from '../../shared/init-flotcharts';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {

  constructor( private zone: NgZone, private cd: ChangeDetectorRef) { }

  title= '123';
  ngOnInit() {
    this.zone.runOutsideAngular(() => {

     $(FlotCharts);

     setTimeout(()=>{
      this.title = '456';
      this.cd.detectChanges();
     },2000);
    });
  }


  dubug(){
    console.log(new Date());

  }

}
