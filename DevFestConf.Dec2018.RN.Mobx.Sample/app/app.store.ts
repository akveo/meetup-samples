import { observable, action } from 'mobx';
import { Icon } from './core/models';

class AppStore {

  @observable iconsFill: Icon[] = [];
  @observable iconsOutline: Icon[] = [];

  @action
  setIconsFill(iconsForSet: Icon[]) {
    this.iconsFill = iconsForSet;
  }

  @action
  setIconsOutline(iconsForSet: Icon[]) {
    this.iconsOutline = iconsForSet;
  }

}

export const appStore: AppStore = new AppStore();