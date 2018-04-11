import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '../app.store';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit{
  constructor(public store: Store) {}

  spendingTypeToAdd: string;
  spendingToAdd: any = {
    type: '',
    sum: 0,
  };

  ngOnInit() {
    this.store.addSpendingType('Food');
    this.store.addSpendingType('Education');
    this.store.addSpendingType('Transport');
  }

  addSum() {
    this.store.addSpendingSum(this.spendingToAdd);
    // this.spendingToAdd.type = '';
    // this.spendingToAdd.value = '';
  }

  addType() {
    this.store.addSpendingType(this.spendingTypeToAdd);
    this.spendingTypeToAdd = '';
  }
}
