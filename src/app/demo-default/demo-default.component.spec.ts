import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDefaultComponent } from './demo-default.component';

describe('DemoDefaultComponent', () => {
  let component: DemoDefaultComponent;
  let fixture: ComponentFixture<DemoDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
