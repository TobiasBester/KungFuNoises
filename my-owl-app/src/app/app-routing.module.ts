import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PlayerPageComponent } from './player-page/player-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'player', component: PlayerPageComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
