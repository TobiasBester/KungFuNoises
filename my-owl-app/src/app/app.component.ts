import { PlayerModalService } from './player-modal.service';
import { TeamModalService } from './team-modal.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'My Overwatch League';
  @HostBinding('class') componentCssClass;
  constructor(public overlayContainer: OverlayContainer,
              public teamModalService: TeamModalService,
              public playerModalService: PlayerModalService) {}

  ngOnInit() {}

  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  chosenTheme(theme) {
    this.onSetTheme(theme);
  }
}
