import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx';

@Injectable()
export class Store {

  @observable
  state: any = {
    spendings: [],
    spendingTypes: []
  };

  spendingToAdd: any = {};
  spendingTypeToAdd: string;

  @computed
  get spendingsTotal(): number {
    let result = 0;
    if (this.state.spendings) {
      this.state.spendings.forEach(x => {
        result += x.value;
      });
    }
    return result;
  }

  @computed
  get spendingsAggregated(): any[] {
    const result = [];
    if (this.state.spendings) {
      this.state.spendings.forEach(x => {
        if (this.state.spendingTypes.find(t => t.name === x.type).checked) {
          const i = result.indexOf(result.find(s => s.type === x.type));
          if (i >= 0) {
            result[i].sum += x.value;
          } else {
            result.push({type: x.type, sum: x.value});
          }
        }
      });
    }
    return result;
  }

  @action
  addSpendingSum() {
    const newItem = {type: this.spendingToAdd.type, value: this.spendingToAdd.value};
    this.state.spendings.push(newItem);

    this.spendingToAdd.type = '';
    this.spendingToAdd.value = '';
  }

  @action
  addSpendingType() {
    this.state.spendingTypes.push({ name: this.spendingTypeToAdd, checked: true });
    this.spendingTypeToAdd = '';
  }
}
