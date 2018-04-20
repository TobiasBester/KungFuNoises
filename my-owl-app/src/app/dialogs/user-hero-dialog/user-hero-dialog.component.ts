import { Player } from './../../shared/models/player.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

import { PLAYERS } from '../../shared/mock_data/players.mock';

@Component({
  selector: 'app-user-hero-dialog',
  templateUrl: './user-hero-dialog.component.html',
  styleUrls: ['./user-hero-dialog.component.css']
})
export class UserHeroDialogComponent implements OnInit {
  player1: Player;
  player2: Player;
  player3: Player;
  httpRequest: XMLHttpRequest;

  constructor(
    private dialogRef: MatDialogRef<UserHeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.player1 = PLAYERS.find(_player => _player.alias === data.alias1);
      this.player2 = PLAYERS.find(_player => _player.alias === data.alias2);
      this.player3 = PLAYERS.find(_player => _player.alias === data.alias3);
    }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
