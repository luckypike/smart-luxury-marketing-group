import { Component, OnInit } from '@angular/core';

import { AppComponent } from './../../app.component';

declare var smoothScroll: any;

@Component({
  selector: '.header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private ss: any;

  constructor(private appComponent: AppComponent) {
    this.ss = smoothScroll.init();
  }

  ngOnInit() {

  }

  toggleMenu() {
    this.appComponent.isMenuVisible = !this.appComponent.isMenuVisible;
  }

  hideMenu() {
    this.appComponent.isMenuVisible = false;
  }



}
