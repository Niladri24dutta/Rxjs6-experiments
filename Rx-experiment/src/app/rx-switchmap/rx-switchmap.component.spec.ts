import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSwitchmapComponent } from './rx-switchmap.component';

describe('RxSwitchmapComponent', () => {
  let component: RxSwitchmapComponent;
  let fixture: ComponentFixture<RxSwitchmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSwitchmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSwitchmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
