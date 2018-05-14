import { TeamModalComponent } from './team-modal/team-modal.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Injectable()
export class TeamModalService {
  selectedTeam: String;

  constructor(public dialog: MatDialog) {
    this.selectedTeam = 'No Team';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TeamModalComponent, {
      width: '840px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog result: ' + result);
      this.selectedTeam = result;
    });
  }

  getTeam(): String {
    return this.selectedTeam;
  }
}
