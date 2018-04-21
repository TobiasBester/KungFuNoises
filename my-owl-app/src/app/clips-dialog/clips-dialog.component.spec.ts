import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipsDialogComponent } from './clips-dialog.component';

describe('ClipsDialogComponent', () => {
  let component: ClipsDialogComponent;
  let fixture: ComponentFixture<ClipsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
