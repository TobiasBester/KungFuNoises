import { Player } from './../shared/models/player.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { PLAYERS } from '../shared/mock_data/players.mock';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.css']
})
export class PlayerModalComponent implements OnInit {
  player: Player;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.player = PLAYERS.find(_player => _player.alias === data.alias);
  }

  ngOnInit() {
  }


}
