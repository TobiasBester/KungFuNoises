import { UserHeroDialogComponent } from './../dialogs/user-hero-dialog/user-hero-dialog.component';
import { MaterialModule } from './../material.module';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ow_detailed = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openUserHeroDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(UserHeroDialogComponent, dialogConfig);
  }

}
