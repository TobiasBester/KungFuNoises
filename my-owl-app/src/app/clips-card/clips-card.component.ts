import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material';
import { ClipsDialogComponent } from '../clips-dialog/clips-dialog.component';

@Component({
  selector: 'app-clips-card',
  templateUrl: './clips-card.component.html',
  styleUrls: ['./clips-card.component.css']
})
export class ClipsCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openClipsDialog(clipNum) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.height = '70%';
    dialogConfig.width = '70%';
    dialogConfig.position = {
      top: '3%'
    };

    this.dialog.open(ClipsDialogComponent, dialogConfig);
  }

}
