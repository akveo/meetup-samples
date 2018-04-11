import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx';

@Injectable()
export class Store {
  @observable
  state: any = {
    spendings: [],
    spendingTypes: []
  };

  @computed
  get spendingsTotal(): number {
    if (this.state.spendings && this.state.spendings.length) {
      return this.state.spendings
        .map(x => x.value)
        .reduce((a, b) => a + b);
    } else {
      return 0;
    }
  }

  @computed
  get spendingsAggregated(): any {
    if (this.state.spendings && this.state.spendings.length) {
      return this.state.spendings
        .reduce((total, item) => {
          if (this.state.spendingTypes.find(t => t.name === item.type).checked) {
            total[item.type] = (total[item.type] || 0) + item.value;
          }
          return total;
        }, {});
    } else {
      return null;
    }
  }

  @computed
  get spendingsAggregatedKeys(): any[] {
    if (this.state.spendings && this.state.spendings.length) {
      return Object.keys(this.spendingsAggregated);
    } else {
      return null;
    }
  }

  @action
  addSpendingSum(spendingToAdd: any) {
    const newItem = {type: spendingToAdd.type, value: spendingToAdd.value};
    this.state.spendings.push(newItem);
  }

  @action
  addSpendingType(typeToAdd: string) {
    this.state.spendingTypes.push({ name: typeToAdd, checked: true });
  }
}
