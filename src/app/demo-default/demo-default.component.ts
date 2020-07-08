import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-default',
  templateUrl: './demo-default.component.html',
  styleUrls: ['./demo-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DemoDefaultComponent {
  @Input() config;
  prop: boolean;

  get runChangeDetection() {
    console.log('[ChangeDetectionStrategy.Default] Checking the view');
    return true;
  }

  onClick() {
    this.prop = !this.prop;
  }

}
