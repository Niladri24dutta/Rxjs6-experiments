import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxDebounceComponent } from './rx-debounce.component';

describe('RxDebounceComponent', () => {
  let component: RxDebounceComponent;
  let fixture: ComponentFixture<RxDebounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxDebounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxDebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
