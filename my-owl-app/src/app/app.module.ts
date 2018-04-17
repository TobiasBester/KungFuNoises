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

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    HomeComponent,
    TeamListComponent,
    ThemeSelectComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
<<<<<<< HEAD
    OverlayModule
=======
    BrowserAnimationsModule
>>>>>>> 9c195a0f828e05ef5881356be126f98096119ade
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
