import { TeamModalComponent } from './team-modal/team-modal.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Injectable()
export class TeamModalService {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(TeamModalComponent, { });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
