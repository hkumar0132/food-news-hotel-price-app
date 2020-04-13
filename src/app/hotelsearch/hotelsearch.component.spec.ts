import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsearchComponent } from './hotelsearch.component';

describe('HotelsearchComponent', () => {
  let component: HotelsearchComponent;
  let fixture: ComponentFixture<HotelsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
