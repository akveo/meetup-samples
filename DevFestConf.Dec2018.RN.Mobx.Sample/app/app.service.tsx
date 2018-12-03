import { Images } from './core/images';
import { Icon } from './core/models';
import { appStore } from './app.store';

export class AppService {

  getIcons() {
    const icons = Object.keys(Images)
      .map((item: string) => ({
        name: item.toLowerCase().replace(/_/g, '-'),
        key: item,
      }));
    return Promise.resolve(icons)
      .then((icons: Icon[]) => {
        appStore.setIcons(icons);
        return icons;
      })
  }

}