import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipsCardComponent } from './clips-card.component';

describe('ClipsCardComponent', () => {
  let component: ClipsCardComponent;
  let fixture: ComponentFixture<ClipsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
