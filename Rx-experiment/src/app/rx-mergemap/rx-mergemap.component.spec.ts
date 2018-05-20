import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxMergemapComponent } from './rx-mergemap.component';

describe('RxMergemapComponent', () => {
  let component: RxMergemapComponent;
  let fixture: ComponentFixture<RxMergemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxMergemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxMergemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
