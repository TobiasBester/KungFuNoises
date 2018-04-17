import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OVERLAY_PROVIDERS } from '@angular/cdk/overlay';
import { TeamListComponent } from './team-list/team-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [OVERLAY_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
