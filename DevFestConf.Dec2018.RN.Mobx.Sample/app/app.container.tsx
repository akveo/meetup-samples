import React, { Component } from 'react';
import { AppComponent } from './app.component';

interface AppContainerProps {}

export class AppContainer extends Component<AppContainerProps> {

  render() {
    return (
      <AppComponent/>
    );
  }

}