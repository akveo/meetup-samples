import { observable, action } from 'mobx';
import { Icon } from './core/models';

class AppStore {

  @observable icons: Icon[] = [];

  @action
  setIcons(iconsForSet: Icon[]) {
    this.icons = iconsForSet;
  }

}

export const appStore: AppStore = new AppStore();