import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
/*
  title = 'My Overwatch League';
  themeClass: string;

  constructor(
    private overlayContainer: OverlayContainer,
    private store: Store<any>
  ) {}
*/
  ngOnInit() {
   /* this.store
      .subscribe(settings => {
        this.themeClass = 'df-theme';

        const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
        const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
        overlayContainerClasses.remove(...themeClassesToRemove);
        overlayContainerClasses.add('df-theme');
      });*/
  }
}
