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
  player: Player;
  httpRequest: XMLHttpRequest;


  constructor(
    private dialogRef: MatDialogRef<UserHeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
