import { Images } from './core/images';
import { Icon, IconsSet } from './core/models';
import { appStore } from './app.store';

export class AppService {

  getIcons(): Promise<IconsSet> {
    const iconsSet: IconsSet = {
      fill: this.mapIcons(Images.FILL),
      outline: this.mapIcons(Images.OUTLINE),
    };
    return Promise.resolve(iconsSet)
      .then((iconsSet: IconsSet) => {
        appStore.setIconsFill(iconsSet.fill);
        appStore.setIconsOutline(iconsSet.outline);
        return iconsSet;
      })
  }

  private mapIcons(icons: Object): Icon[] {
    return Object.keys(icons)
      .map((item: string) => ({
        name: item.toLowerCase().replace(/_/g, '-'),
        key: item,
      }));
  }

}