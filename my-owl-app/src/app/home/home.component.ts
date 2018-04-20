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

  ow_detailed = false;

  constructor(public dialog: MatDialog,
              public playerModalService: PlayerModalService) {}

  ngOnInit() {
  }

  openUserHeroDialog(playerName1, playerName2, playerName3) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.height = '90%';
    dialogConfig.width = '80%';
    dialogConfig.position = {
      top: '3%'
    };
    dialogConfig.data = { alias1: playerName1,
                          alias2: playerName2,
                          alias3: playerName3};

    this.dialog.open(UserHeroDialogComponent, dialogConfig);
  }

}
