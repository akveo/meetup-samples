import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(public store: Store) {}

}
