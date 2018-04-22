import { Team } from './../shared/models/team.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TEAMS_LIST } from '../shared/mock_data/teams.mock';

@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: ['./team-modal.component.css']
})
export class TeamModalComponent implements OnInit {

  teams_1 = TEAMS_LIST.slice(0, 3);
  teams_2 = TEAMS_LIST.slice(4, 7);
  teams_3 = TEAMS_LIST.slice(8, 11);

  constructor(public dialogRef: MatDialogRef<TeamModalComponent>) { }

  ngOnInit() {
  }

  dynamicStyles(team: Team) {
    return {
      'background-image' : 'url(' + team.backgroundLocation + ')',
      'background-size' : 'contain',
      'background-position' : 'centre',
      'color' : 'azure',
      'width' : '400px',
      'height' : '160px',
      'margin' : '0px'
    };
  }
}
