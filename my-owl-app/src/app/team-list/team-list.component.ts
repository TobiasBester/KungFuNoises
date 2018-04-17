import { Component, OnInit } from '@angular/core';

import { TEAMS } from '../shared/mock_data/teams.mock';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams = TEAMS;


  constructor() { }

  ngOnInit() {
  }

}
