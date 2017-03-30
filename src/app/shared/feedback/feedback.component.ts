import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { AppComponent } from './../../app.component';

@Component({
  selector: 'main.feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  host: {'[@feedbackAnimation]': 'true'},
  animations: [
    trigger('feedbackAnimation', [
      transition(':leave', [
        style({
          opacity: 1,
          transform: 'translateY(0)'
        }),
        animate('0.25s ease-in', style({
          opacity: 0,
          transform: 'translateY(10rem)'
        }))
      ]),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(10rem)'
        }),
        animate('0.4s ease-in-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class FeedbackComponent implements OnInit {
  isSended: boolean = false;

  constructor(private appComponent: AppComponent, private http: Http) { }

  ngOnInit() {
    this.appComponent.isMenuUp = true;
  }

  ngOnDestroy() {
    this.appComponent.isMenuUp = false;
  }

  sendEmail(name, email, message) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.isSended = true;
    this.http.post('feedback.php', { name, email, message }, options).subscribe(res => console.log(res));
  }
}
