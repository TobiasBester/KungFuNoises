import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-clips-dialog',
  templateUrl: './clips-dialog.component.html',
  styleUrls: ['./clips-dialog.component.css']
})
export class ClipsDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ClipsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
