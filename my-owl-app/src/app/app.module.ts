import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { OVERLAY_PROVIDERS } from '@angular/cdk/overlay';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
// import { TeamListComponent } from './team-list/team-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    HomeComponent
    // TeamListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [OVERLAY_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
