import { Component, OnInit } from '@angular/core';

import { TEAMS_LIST } from '../shared/mock_data/teams.mock';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams = TEAMS_LIST;

  constructor() { }

  ngOnInit() {
  }

}
