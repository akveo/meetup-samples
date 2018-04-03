import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../app.store';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  constructor(public store: Store) {}

  addSum() {
    this.store.addSpendingSum();
  }

  addType() {
    this.store.addSpendingType();
  }
}
