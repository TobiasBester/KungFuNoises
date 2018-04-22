import { environment } from './../environments/environment.prod';
import { UserHeroDialogComponent } from './dialogs/user-hero-dialog/user-hero-dialog.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { TeamListComponent } from './team-list/team-list.component';
import { ThemeSelectComponent } from './theme-select/theme-select.component';
import { TeamModalComponent } from './team-modal/team-modal.component';
import { TeamModalService } from './team-modal.service';
import { PlayerModalService } from './player-modal.service';
import { PlayerModalComponent } from './player-modal/player-modal.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { MyowCardComponent } from './myow-card/myow-card.component';
import { ClipsCardComponent } from './clips-card/clips-card.component';
import { ClipsDialogComponent } from './clips-dialog/clips-dialog.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListService } from './hero-list.service';

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
    SignUpComponent,
    TeamCardComponent,
    NewsCardComponent,
    MyowCardComponent,
    ClipsCardComponent,
    ClipsDialogComponent,
    HeroListComponent
  ],
  entryComponents: [
    TeamModalComponent,
    PlayerModalComponent,
    UserHeroDialogComponent,
    SignUpComponent,
    ClipsDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    OverlayModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [TeamModalService, PlayerModalService, HeroListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
