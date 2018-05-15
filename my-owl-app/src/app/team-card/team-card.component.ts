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

  currentDate = new Date();
  matchDate = new Date('May 17, 2018 02:00:00');
  diff = new Date(this.matchDate.getTime() - this.currentDate.getTime());
  days = this.diff.getDay();
  hours = this.diff.getHours();
  minutes = this.diff.getMinutes();

  constructor() { }

  // {"publicKey":"","privateKey":"rmuwX-bKJlXZCiGYGc3YxNDk9XT7dQlJzs5ati6pVgw"}

  ngOnInit() {
  }

}
