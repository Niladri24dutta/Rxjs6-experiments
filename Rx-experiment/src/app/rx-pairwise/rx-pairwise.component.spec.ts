import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxPairwiseComponent } from './rx-pairwise.component';

describe('RxPairwiseComponent', () => {
  let component: RxPairwiseComponent;
  let fixture: ComponentFixture<RxPairwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxPairwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxPairwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
