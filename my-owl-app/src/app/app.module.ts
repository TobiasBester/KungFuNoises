import { UserHeroDialogComponent } from './dialogs/user-hero-dialog/user-hero-dialog.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OverlayModule } from '@angular/cdk/overlay';

import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { TeamListComponent } from './team-list/team-list.component';
import { ThemeSelectComponent } from './theme-select/theme-select.component';
import { TeamModalComponent } from './team-modal/team-modal.component';
import { TeamModalService } from './team-modal.service';
import { PlayerModalService } from './player-modal.service';
import { PlayerModalComponent } from './player-modal/player-modal.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    HomeComponent,
    TeamListComponent,
    ThemeSelectComponent,
    UserHeroDialogComponent,
    TeamModalComponent,
    PlayerModalComponent,
    SignUpComponent
  ],
  entryComponents: [
    TeamModalComponent,
    PlayerModalComponent,
    UserHeroDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    OverlayModule
  ],
  providers: [TeamModalService, PlayerModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
