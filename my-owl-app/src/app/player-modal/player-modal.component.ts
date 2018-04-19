import { Role } from './../shared/enums/role.enum';
import { Player } from './../shared/models/player.model';
import { PLAYERS } from '../shared/mock_data/players.mock';

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.css']
})
export class PlayerModalComponent implements OnInit {
  player: Player;
  role: String;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.player = PLAYERS.find(_player => _player.alias === data.alias);
    this.role = Role[this.player.role];
  }

  ngOnInit() {
  }

}
