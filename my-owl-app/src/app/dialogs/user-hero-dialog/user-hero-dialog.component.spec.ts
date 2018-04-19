import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeroDialogComponent } from './user-hero-dialog.component';

describe('UserHeroDialogComponent', () => {
  let component: UserHeroDialogComponent;
  let fixture: ComponentFixture<UserHeroDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHeroDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
