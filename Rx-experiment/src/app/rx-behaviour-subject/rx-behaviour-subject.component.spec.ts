import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxBehaviourSubjectComponent } from './rx-behaviour-subject.component';

describe('RxBehaviourSubjectComponent', () => {
  let component: RxBehaviourSubjectComponent;
  let fixture: ComponentFixture<RxBehaviourSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxBehaviourSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxBehaviourSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
