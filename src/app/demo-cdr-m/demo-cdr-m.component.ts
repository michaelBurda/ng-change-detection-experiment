import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-cdr-m',
  templateUrl: './demo-cdr-m.component.html',
  styleUrls: ['./demo-cdr-m.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCdrMComponent implements OnInit {

  @Input() config;
  private intervalId: number;
  private prop = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  get runChangeDetection() {
    console.log('[ChangeDetectionStrategy.OnPush with markForCheck] Checking the view');
    return true;
  }

  onClick() {
    this.prop += this.prop;
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.prop++;
      this.cdr.markForCheck();
    }, 1000);
  }

  onStop() {
    clearInterval(this.intervalId);
  }

}
