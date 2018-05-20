import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxScanReduceComponent } from './rx-scan-reduce.component';

describe('RxScanReduceComponent', () => {
  let component: RxScanReduceComponent;
  let fixture: ComponentFixture<RxScanReduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxScanReduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxScanReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
