import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplatedemoComponent } from './ng-templatedemo.component';

describe('NgTemplatedemoComponent', () => {
  let component: NgTemplatedemoComponent;
  let fixture: ComponentFixture<NgTemplatedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplatedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplatedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
