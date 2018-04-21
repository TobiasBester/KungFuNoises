import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material';
import { TEAMS, TEAMS_LIST } from './../shared/mock_data/teams.mock';
import { TeamListComponent } from './../team-list/team-list.component';
import { Team } from './../shared/models/team.model';
import { PlayerModalService } from './../player-modal.service';
import { UserHeroDialogComponent } from './../dialogs/user-hero-dialog/user-hero-dialog.component';

@Component({
  selector: 'app-myow-card',
  templateUrl: './myow-card.component.html',
  styleUrls: ['./myow-card.component.css']
})
export class MyowCardComponent implements OnInit {

  ow_detailed = false;
  myTeam = TEAMS.SHANGHAI_DRAGONS;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openUserHeroDialog(hero1, playerName1, playerName2, playerName3) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.height = '90%';
    dialogConfig.width = '80%';
    dialogConfig.position = {
      top: '3%'
    };
    dialogConfig.data = { heroName: hero1,
                          alias1: playerName1,
                          alias2: playerName2,
                          alias3: playerName3};

    this.dialog.open(UserHeroDialogComponent, dialogConfig);
  }

}
