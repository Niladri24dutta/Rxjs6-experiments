import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenttestComponent } from './contenttest.component';

describe('ContenttestComponent', () => {
  let component: ContenttestComponent;
  let fixture: ComponentFixture<ContenttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
