import { Component, OnInit, OnDestroy } from '@angular/core';
import {trigger, state, animate, style, transition} from '@angular/core';

import { AppComponent } from './../../app.component';

@Component({
  selector: 'main.feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  host: {'[@feedbackAnimation]': 'true'},
  animations: [
    trigger('feedbackAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(20rem)'
        }),
        animate('0.3s ease-in-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class FeedbackComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    this.appComponent.isMenuUp = true;
  }

  ngOnDestroy() {
    this.appComponent.isMenuUp = false;
  }

}
