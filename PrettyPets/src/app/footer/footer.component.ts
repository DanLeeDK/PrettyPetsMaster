import { GlobalEventsManager } from './../shared/GlobalEventsManager';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showFooter = false;

  constructor( private globalEventsManager: GlobalEventsManager) {
    this.globalEventsManager.showNavBarAndFooterEmitter.subscribe((mode) => {
      this.showFooter = mode;
   });
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.showFooter = true;
      } else {
        this.showFooter = false;
      }
  }

}
