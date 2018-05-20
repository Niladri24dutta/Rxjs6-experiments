import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxObservablescratchComponent } from './rx-observablescratch.component';

describe('RxObservablescratchComponent', () => {
  let component: RxObservablescratchComponent;
  let fixture: ComponentFixture<RxObservablescratchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxObservablescratchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxObservablescratchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
