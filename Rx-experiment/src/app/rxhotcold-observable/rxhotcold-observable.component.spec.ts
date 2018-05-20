import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxhotcoldObservableComponent } from './rxhotcold-observable.component';

describe('RxhotcoldObservableComponent', () => {
  let component: RxhotcoldObservableComponent;
  let fixture: ComponentFixture<RxhotcoldObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxhotcoldObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxhotcoldObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
