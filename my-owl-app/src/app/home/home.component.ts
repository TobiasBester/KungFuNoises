import { TEAMS, TEAMS_LIST } from './../shared/mock_data/teams.mock';
import { TeamListComponent } from './../team-list/team-list.component';
import { Team } from './../shared/models/team.model';
import { PlayerModalService } from './../player-modal.service';
import { UserHeroDialogComponent } from './../dialogs/user-hero-dialog/user-hero-dialog.component';
import { MaterialModule } from './../material.module';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myTeam = TEAMS.SHANGHAI_DRAGONS;

  constructor() {}

  ngOnInit() {
  }

}
