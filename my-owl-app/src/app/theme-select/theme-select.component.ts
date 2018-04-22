import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TEAMS_LIST } from '../shared/mock_data/teams.mock';

@Component({
  selector: 'app-theme-select',
  templateUrl: './theme-select.component.html',
  styleUrls: ['./theme-select.component.css']
})
export class ThemeSelectComponent implements OnInit {
  teams = TEAMS_LIST;
  selected = 'sd-theme';
  @Output() chosenTheme = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

  toggle() {
    this.chosenTheme.emit(this.selected);
  }

}
