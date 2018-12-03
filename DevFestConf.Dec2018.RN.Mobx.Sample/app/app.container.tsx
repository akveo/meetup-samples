import React from 'react';
import { Component } from 'react';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { Icon } from './core/models';
import { observer } from 'mobx-react';
import { AppVM } from './app.vm';

interface AppContainerProps {}

@observer
export class AppContainer extends Component<AppContainerProps> {

  service: AppService = new AppService();
  vm: AppVM = new AppVM();

  componentWillMount() {
    this.service.getIcons();
  }

  render() {
    return (
      <AppComponent
        icons={this.vm.appIcons}
        searchString={this.vm.searchString}

        onSetSearchString={(text: string) => this.vm.setSearchString(text)}
        onIcon={() => console.log('show icon')}
      />
    );
  }

}