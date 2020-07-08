import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCdrComponent } from './demo-cdr.component';

describe('DemoCdrComponent', () => {
  let component: DemoCdrComponent;
  let fixture: ComponentFixture<DemoCdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
