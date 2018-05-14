import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-link',
  template: `
  <a [routerLink]="['/player/', name]">
    {{ name }}
  </a>
  `,
  styles: []
})
export class PlayerLinkComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
