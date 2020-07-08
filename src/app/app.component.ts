import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config = {
    position: 'top'
  };

  updateConfig() {
    // wouldn't trigger change detection because we haven't changed reference
    // this.config.position = 'bottom';

    // would trigger change detection (onPush)
    this.config = {
      position: 'bottom'
    };
  }

  onClick() {
    console.log('[AppComponent] onClick');
  }
}
