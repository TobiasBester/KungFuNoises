import { PlayerModalService } from './player-modal.service';
import { TeamModalService } from './team-modal.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  readonly VAPID_PUBLIC_KEY  = 'BMUiwBMCUPWRtNeuh6uLs8zVpQNOYCRl4JEvNA5TbMPdLBQ_aAdjirlxieQIelCHwhv2VOofvXMCFw13xINI5u8';

  title = 'My Overwatch League';
  logoDark = '../assets/images/my-owl-logo-text.svg';
  logoLight = '../assets/images/my-owl-logo-text-light.svg';
  logoPath = this.logoDark;

  @HostBinding('class') componentCssClass;
  constructor(public overlayContainer: OverlayContainer,
              public teamModalService: TeamModalService,
              public playerModalService: PlayerModalService,
              private swPush: SwPush) {}

  ngOnInit() {}

  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
    console.log(theme);
    if (theme.includes('df') || theme.includes('ho') || theme.includes('ny') || (theme.includes('sd') && !theme.includes('sdyn'))) {
      this.logoPath = this.logoLight;
    } else {
      this.logoPath = this.logoDark;
    }
  }

  chosenTheme(theme) {
    this.onSetTheme(theme);
  }

  /*
  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY;
    })
    .then(sub => this.newsLetterService)
  }*/

}
