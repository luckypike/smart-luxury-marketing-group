import { Component, OnInit } from '@angular/core';

import { AppComponent } from './../../app.component';

@Component({
  selector: '.header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.appComponent.isMenuVisible = !this.appComponent.isMenuVisible;
  }

}
