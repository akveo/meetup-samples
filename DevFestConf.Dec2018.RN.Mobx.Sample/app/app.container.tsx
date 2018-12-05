import React from 'react';
import { Component } from 'react';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { observer } from 'mobx-react';
import { AppVM } from './app.vm';
import { Icon } from './core/models/icon';

interface AppContainerProps {}

interface AppContainerState {
  modalVisible: boolean;
}

@observer
export class AppContainer extends Component<AppContainerProps, AppContainerState> {

  service: AppService = new AppService();
  vm: AppVM = new AppVM();
  state: AppContainerState = {
    modalVisible: false,
  };

  componentWillMount() {
    this.service.getIcons();
  }

  onShowModal(icon: Icon) {
    this.vm.setCurrentIcon(icon);
    this.setState({modalVisible: true});
  }

  onCloseModal() {
    this.vm.setCurrentIcon({});
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <AppComponent
        icons={this.vm.appIcons}
        searchString={this.vm.searchString}
        isModalVisible={this.state.modalVisible}
        selectedIcon={this.vm.currentIcon}
        isOutline={this.vm.isOutline}

        setIsOutline={(value: boolean) => this.vm.setIsOutline(value)}
        onSetSearchString={(text: string) => this.vm.setSearchString(text)}
        onIcon={(icon: Icon) => this.onShowModal(icon)}
        onCloseModal={() => this.onCloseModal()}
      />
    );
  }

}