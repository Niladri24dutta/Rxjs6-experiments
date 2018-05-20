import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxPluckComponent } from './rx-pluck.component';

describe('RxPluckComponent', () => {
  let component: RxPluckComponent;
  let fixture: ComponentFixture<RxPluckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxPluckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxPluckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
