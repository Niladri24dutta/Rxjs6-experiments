import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxObservableintervalComponent } from './rx-observableinterval.component';

describe('RxObservableintervalComponent', () => {
  let component: RxObservableintervalComponent;
  let fixture: ComponentFixture<RxObservableintervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxObservableintervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxObservableintervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
