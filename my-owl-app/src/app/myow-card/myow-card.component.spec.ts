import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyowCardComponent } from './myow-card.component';

describe('MyowCardComponent', () => {
  let component: MyowCardComponent;
  let fixture: ComponentFixture<MyowCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyowCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
