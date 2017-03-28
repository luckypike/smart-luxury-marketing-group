import { Component, OnInit } from '@angular/core';

import { AppComponent } from './../app.component';

import { FacebookService } from 'ng2-facebook-sdk';

@Component({
  selector: 'main.main',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private appComponent: AppComponent, private fb: FacebookService) {
    this.fb.init({
      appId: '1353041454752519',
      xfbml: true,
      version: 'v2.8'
    });
  }

  ngOnInit() {
    this.appComponent.sr.reveal('.manager', 240);
    this.appComponent.sr.reveal('.fadeOut', {
      distance: 0,
      delay: 450
    });

    this.appComponent.sr.reveal('.fadeDwn', {
      delay: 150
    });

    this.appComponent.sr.reveal('.logo', 240, {
      distance: 0
    });




  }

  share() {
    this.fb.ui({
      method: 'share',
      href: 'https://slmgroup.ru'
    });
  }
}
