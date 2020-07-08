import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-cdr',
  templateUrl: './demo-cdr.component.html',
  styleUrls: ['./demo-cdr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCdrComponent implements OnInit {
  @Input() config;
  prop: boolean;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cdr.detach();
  }

  get runChangeDetection() {
    console.log('[ChangeDetectionStrategy.OnPush with detach] Checking the view');
    return true;
  }

  onClick() {
    this.prop = !this.prop;
    this.cdr.detectChanges();
  }

  onDetectChanges() {
    this.cdr.detectChanges();
  }

}
