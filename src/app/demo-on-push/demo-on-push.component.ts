import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-demo-on-push',
  templateUrl: './demo-on-push.component.html',
  styleUrls: ['./demo-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoOnPushComponent {
  @Input() config;
  prop: boolean;

  get runChangeDetection() {
    console.log('[ChangeDetectionStrategy.OnPush] Checking the view');
    return true;
  }

  onClick() {
    this.prop = !this.prop;
  }

}
