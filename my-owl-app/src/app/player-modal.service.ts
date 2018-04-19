import { PlayerModalComponent } from './player-modal/player-modal.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

@Injectable()
export class PlayerModalService {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(PlayerModalComponent, {
      data: { alias: 'Ado' },
      width: '600px',
    });
  }
}
