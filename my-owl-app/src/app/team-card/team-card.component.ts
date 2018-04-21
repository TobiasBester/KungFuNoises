import { TEAMS, TEAMS_LIST } from './../shared/mock_data/teams.mock';
import { TeamListComponent } from './../team-list/team-list.component';
import { Team } from './../shared/models/team.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {

  myTeam = TEAMS.SHANGHAI_DRAGONS;
  prevTeam = TEAMS.FLORIDA_MAYHEM;
  latestTeam = TEAMS.BOSTON_UPRISING;
  showSpoiler = false;

  constructor() { }

  ngOnInit() {
  }

}
