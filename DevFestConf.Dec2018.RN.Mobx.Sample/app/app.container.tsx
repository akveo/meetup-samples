import React, { Component } from 'react';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { Icon } from './core/models';

interface AppContainerProps {}

interface AppContainerState {
  icons: Icon[];
}

export class AppContainer extends Component<AppContainerProps, AppContainerState> {

  service: AppService = new AppService();
  state: AppContainerState = { icons: [], };

  componentWillMount() {
    this.service.getIcons()
      .then((icons: Icon[]) => this.setState({icons: icons}));
  }

  render() {
    return (
      <AppComponent
        icons={this.state.icons}
      />
    );
  }

}