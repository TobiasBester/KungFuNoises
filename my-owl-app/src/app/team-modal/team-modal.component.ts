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

}
