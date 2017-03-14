import { Component, OnInit } from '@angular/core';
import {trigger, state, animate, style, transition} from '@angular/core';

@Component({
  selector: '.app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {'[@preloaderState]': 'true'},
  animations: [
    trigger('preloaderState', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.5s ease-in-out', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isMenuVisible: boolean = false;

  ngOnInit() {
  }
}
