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

  teams = TEAMS_LIST;

  constructor(public dialogRef: MatDialogRef<TeamModalComponent>) { }

  ngOnInit() {
  }

  dynamicStyles(team: Team) {
    return {
      'background-image' : 'url(' + team.backgroundLocation + ')',
      'background-size' : 'contain',
      'background-position' : 'centre',
      'color' : 'azure',
      'width' : '200px',
      'height' : '80px',
      'margin' : '10px'
    };
  }
}
