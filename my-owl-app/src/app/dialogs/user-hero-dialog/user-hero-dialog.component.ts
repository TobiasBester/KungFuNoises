import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-user-hero-dialog',
  templateUrl: './user-hero-dialog.component.html',
  styleUrls: ['./user-hero-dialog.component.css']
})
export class UserHeroDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<UserHeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      /// this.hero = selectedhero
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
