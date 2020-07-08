import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOnPushComponent } from './demo-on-push.component';

describe('DemoOnPushComponent', () => {
  let component: DemoOnPushComponent;
  let fixture: ComponentFixture<DemoOnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoOnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
