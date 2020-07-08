import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCdrMComponent } from './demo-cdr-m.component';

describe('DemoCdrMComponent', () => {
  let component: DemoCdrMComponent;
  let fixture: ComponentFixture<DemoCdrMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCdrMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCdrMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
